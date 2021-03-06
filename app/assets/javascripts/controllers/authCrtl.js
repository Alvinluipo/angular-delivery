angular.module('myApp')
.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){

  $scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('/');
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };

  onEnter: ['$state', 'Auth', function($state, Auth) {
    Auth.currentUser().then(function (){
      $state.go('home');
    })
  }]
}]);
