export function routerConfig ($routeProvider) {
  'ngInject';

  $routeProvider
    .when('/index', {
      templateUrl: 'app/pages/index/index.html',
      controller: 'IndexController',
      controllerAs: 'index'
    })
    .when('/press', {
      templateUrl: 'app/pages/press/press.html',
      controller: 'PressController',
      controllerAs: 'press'
    })
    .otherwise({
      redirectTo: '/index'
    });
}
