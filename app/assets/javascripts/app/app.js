angular
  .module('delivery', ['ui.router', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
            .state('home', {
              url: '/',
              templateUrl: 'home.html',
              controller: 'HomeController as home'
            })
            .state('login', {
      				url: '/login',
      				templateUrl: 'devise/_login.html',
      				controller: 'AuthCtrl'
      			})
    			.state('register', {
      				url: '/register',
      				templateUrl: 'devise/_register.html',
      				controller: 'AuthCtrl'
      			})


            		$urlRouterProvider.otherwise('/');
          });
