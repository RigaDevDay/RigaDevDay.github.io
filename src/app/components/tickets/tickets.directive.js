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
    this.tickets = [
      {
        title: 'Late Bird',
        time: '(16.02.16-03.03.16)',
        ends: this.endsIn("04.03.16"),
        price: {day1: '150€+VAT', day2: '260€+VAT'},
        active: this.isInTimeRange('16.02.16', '03.03.16'),
        reserveLink: 'http://www.kalevatravel.lv/celojumi/page.php?id=667'
      },
      {
        title: 'Workshops',
        time: '(01.12.15-03.03.16)',
        ends: this.endsIn("04.03.16"),
        price: '99€+VAT',
        active: this.isInTimeRange('01.12.15', '03.03.16'),
        reserveLink: 'http://www.kalevatravel.lv/celojumi/page.php?id=667',
        singleDayPrice: true
      }
    ];
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
