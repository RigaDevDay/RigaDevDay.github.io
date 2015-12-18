export function BackNavbarDirective() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/back-navbar/back-navbar.html',
    scope: {},
    controller: BackNavbarController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class BackNavbarController {
  constructor () {
    'ngInject';
  }
}
