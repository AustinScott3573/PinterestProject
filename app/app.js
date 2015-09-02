var app = angular.module("PinApp",[ 'ngRoute', 'firebase', "angular.filter"]);

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
      .when('/user', {
        templateUrl: 'partials/boards.html',
        controller: 'BoardsCtrl'
      }).
      when('/createpin', {
        templateUrl: 'partials/create-pin.html',
        controller: 'CreatePinCtrl'
      }).
      when('/uploadpin', {
        templateUrl: 'partials/upload-pin.html',
        controller: 'UploadPinCtrl'
      }).
      // .when('/photo/:id', {
      //   templateUrl: 'partials/detail.html',
      //   controller: 'DetailCtrl'
      // })
      when('/boards', {
        templateUrl: 'partials/boards.html',
        controller: 'BoardsCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);