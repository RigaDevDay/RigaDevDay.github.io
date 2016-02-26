export function TicketsDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/tickets/tickets.html',
    scope: {},
    controller: TicketsController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class TicketsController {
  constructor (moment) {
    'ngInject';

    this.moment = moment;
  }

  endsIn (date) {
    return this.moment(date, 'DD.MM.YYYY').fromNow()
  }

  isInTimeRange (startDate, endDate) {
    let startTime = this.moment(startDate, 'DD.MM.YYYY').startOf('day');
    let endTime = this.moment(endDate, 'DD.MM.YYYY').endOf('day');

    let now = this.moment();

    return now.isBetween(startTime, endTime);
  }
}
