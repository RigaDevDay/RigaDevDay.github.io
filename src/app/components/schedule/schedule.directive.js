export function ScheduleDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/schedule/schedule.html',
    scope: {},
    controller: ScheduleController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class ScheduleController {
  constructor ($rootScope, $log, $modal, dataLoaderService) {
    'ngInject';

    this.dataLoaderService = dataLoaderService;

    this.days = [];
    this.schedule = null;
    this.rooms = null;
    this.tracks = null;

    this.activeTabIndex = 0;

    dataLoaderService.getMain()
      .then((data) => {
        this.days = data.days;
        this.speakers = data.speakers;
        return this.days[0];
      })
      .then(this.loadSchedule.bind(this));

    this.modalScope = $rootScope.$new();
    this.modal = $modal({
      animation: 'am-fade-and-scale',
      scope: this.modalScope,
      templateUrl: 'app/components/schedule/schedule-modal.html',
      show: false
    });
  }

  loadSchedule (day) {
    return this.dataLoaderService.getSchedule(day.file)
      .then((data) => {
        this.schedule = data.schedule;
        this.rooms = data.roomNames;
        this.tracks = data.trackNames;

        return data;
      });
  }

  loadDay (dayNumber) {
    return this.loadSchedule(this.days[dayNumber]);
  }

  tabActive (index) {
    this.loadDay(index).then(() => {
      this.activeTabIndex = index;
    });
  }

  scheduleModal (talk) {
    talk.speaker = this.speakers[talk.speakers[0]];

    // if multiple speakers supported
    // var speakers = [];
    // angular.forEach(talk.speakers, function(id, index) {
    //   this.push(self.speakers[id]);
    // }, speakers);
    // talk.speakers = speakers;

    this.modalScope.talk = talk;
    this.modal.$promise
      .then(this.modal.show)
      .catch((error) => {
        this.$log.error("Can't open schedule modal", error)
      });
  }

}
