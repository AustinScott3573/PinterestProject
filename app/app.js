var app = angular.module("PinApp",[ 'ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LogCtrl'
      })
      .when('/pins', {
        templateUrl: 'partials/pinDiv.html',
        controller: 'PinCtrl'
      })
      // .when('/signup', {
      //   templateUrl: 'partials/signup.html',
      //   controller: 'SignupCtrl'
      // })
      // .when('/photo/:id', {
      //   templateUrl: 'partials/detail.html',
      //   controller: 'DetailCtrl'
      // })
      .otherwise('/');
  }]);