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
        title: 'Early bird',
        time: '(01.10.15-30.11.15)',
        ends: this.endsIn("1.12.15"),
        price: {day1: '89€+VAT', day2: '158€+VAT'},
        active: this.isInTimeRange('01.10.15', '30.11.15'),
        reserveLink: 'http://www.kalevatravel.lv/celojumi/page.php?id=667'
      },
      {
        title: 'Normal',
        time: '(01.12.15-15.02.16)',
        ends: this.endsIn("16.02.16"),
        price: {day1: '119€+VAT', day2: '198€+VAT'},
        active: this.isInTimeRange('01.12.15', '15.02.16'),
        reserveLink: 'http://www.kalevatravel.lv/celojumi/page.php?id=667'
      },
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
        time: '(01.10.15-15.02.16)',
        ends: this.endsIn("16.02.16"),
        price: false,
        active: false,
        reserveLink: ''
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
