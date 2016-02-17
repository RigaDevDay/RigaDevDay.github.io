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
  constructor ($rootScope, $log, $modal, dataLoaderService, speakersService, colorsService) {
    'ngInject';

    this.dataLoaderService = dataLoaderService;
    this.speakersService = speakersService;
    this.colorsService = colorsService;

    this.days = [];
    this.schedule = null;
    this.rooms = null;
    this.tracks = null;

    this.activeTabIndex = 0;

    let data = dataLoaderService.getMain();
    this.days = data.days;
    this.speakers = data.speakers;
    this.loadDay(0);

    this.modalScope = $rootScope.$new();
    this.modal = $modal({
      animation: 'am-fade-and-scale',
      scope: this.modalScope,
      templateUrl: 'app/components/schedule/schedule-modal.html',
      show: false
    });
  }

  loadDay (day) {
    let scheduleData = this.dataLoaderService.getSchedule(day);

    this.schedule = scheduleData.schedule;
    this.rooms = scheduleData.roomNames;
    this.tracks = scheduleData.trackNames;

    return scheduleData;
  }

  tabActive (index) {
    this.activeTabIndex = index;
    this.loadDay(index);
  }

  scheduleModal (talk) {
    talk.foundSpeakers = [];
    for (var i = 0; i < talk.speakers.length; i++) {
      talk.foundSpeakers.push(this.findSpeakerById(talk.speakers[i]));
    }

    this.modalScope.talk = talk;
    this.modal.$promise
      .then(this.modal.show)
      .catch((error) => {
        this.$log.error("Can't open schedule modal", error)
      });
  }

  findSpeakerById (speakerId) {
    return this.speakersService.findSpeakerById(this.speakers, speakerId);
  }

  getTagColorClass (tag) {
    return `color-${this.colorsService.colorForTag(tag)}`;
  }
}
