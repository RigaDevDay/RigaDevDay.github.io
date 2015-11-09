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
  constructor () {
    'ngInject';

    this.tickets = [
      {
        title: 'Early bird',
        time: '(01.10.15-30.11.15)',
        price: {day1: '89€+VAT', day2: '158€+VAT'},
        active: true,
        reserveLink: 'http://www.kalevatravel.lv/celojumi/page.php?id=667'
      },
      {
        title: 'Normal',
        time: '(30.11.15-15.02.16)',
        price: {day1: '119€+VAT', day2: '198€+VAT'},
        active: false,
        reserveLink: ''
      },
      {
        title: 'Late Bird',
        time: '(15.02.16-03.03.16)',
        price: {day1: '150€+VAT', day2: '260€+VAT'},
        active: false,
        reserveLink: ''
      },
      {
        title: 'Workshops',
        time: '(01.10.15-15.02.16)',
        price: false,
        active: false,
        reserveLink: ''
      }
    ];
  }
}
