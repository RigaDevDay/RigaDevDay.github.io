export function AboutDirective() {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/about/about.html',
    scope: {},
    controller: AboutController,
    link: function () {
      window.twttr.widgets.load();
    },
    controllerAs: 'vm',
    bindToController: true
  };
}

class AboutController {
  constructor () {
    'ngInject';
  }
}
