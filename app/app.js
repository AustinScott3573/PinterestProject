var app = angular.module("PinApp",[ 'ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/pinDiv.html',
        controller: 'PinCtrl'
      // }).when('/pins/', {
      //   templateUrl: 'partials/',
      //   controller: ''
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);