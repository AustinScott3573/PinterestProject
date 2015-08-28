var app = angular.module("PinApp",[ 'ngRoute', 'angular.filter', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/',
        controller: 'PinCtrl'
      // }).when('/pins/', {
      //   templateUrl: 'partials/',
      //   controller: ''
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);