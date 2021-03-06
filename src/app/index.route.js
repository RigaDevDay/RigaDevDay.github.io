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
    .when('/memories', {
      templateUrl: 'app/pages/memories/memories.html',
      controller: 'MemoriesController',
      controllerAs: 'memories'
    })
    .when('/team', {
      templateUrl: 'app/pages/team/team.html',
      controller: 'TeamController',
      controllerAs: 'team'
    })
    .when('/sponsors/:id', {
      templateUrl: 'app/pages/sponsors/sponsors.html',
      controller: 'SponsorsController',
      controllerAs: 'sponsors'
    })
    .otherwise({
      redirectTo: '/index'
    });
}
