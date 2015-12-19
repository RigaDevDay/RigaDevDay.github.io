export function FooterDirective () {
  'ngInject';

  return {
    restrict: 'E',
    templateUrl: 'app/components/footer/footer.html',
    scope: {},
    controller: FooterController,
    controllerAs: 'vm',
    bindToController: true
  };
}

class FooterController {
  constructor ($window) {
    'ngInject';

    $window.twttr.widgets.load();
    $window.FB.XFBML.parse();
    $window.IN.parse();
    $window.gapi.plusone.go();
  }
}
