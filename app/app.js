var app = angular.module("PinApp",[ 'ngRoute', 'angular.filter', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/',
        controller: 'PinCtrl'
      }).when('/songs/', {
        templateUrl: 'partials/',
        controller: 'SongListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);