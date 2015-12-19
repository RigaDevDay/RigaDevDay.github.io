export function AboutDirective() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/about/about.html',
    scope: {},
    controller: AboutController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class AboutController {
  constructor ($window) {
    'ngInject';

    $window.twttr.widgets.load();
  }
}
