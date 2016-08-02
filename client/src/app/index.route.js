export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/main/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  })
  .state('auth', {
    url: '/auth',
    templateUrl: 'app/main/main.html',
    controller: 'MainController',
    controllerAs: 'main'
  });

  $urlRouterProvider.otherwise('/');
}
