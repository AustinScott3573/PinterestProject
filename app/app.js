var app = angular.module("PinApp",[ 'ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LogCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignUpCtrl'
      })
      .when('/pins', {
        templateUrl: 'partials/pinDiv.html',
        controller: 'PinCtrl'
      })
      
      // .when('/photo/:id', {
      //   templateUrl: 'partials/detail.html',
      //   controller: 'DetailCtrl'
      // })
      .otherwise('/');
  }]);