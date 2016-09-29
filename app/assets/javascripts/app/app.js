angular
  .module('delivery', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
            .state('home', {
              url: '/',
              templateUrl: 'home.html',
              controller: 'HomeController as home'
            })
    $urlRouterProvider.otherwise('/');

  })
