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
      .when('/user', {
        templateUrl: 'partials/user.html',
        controller: 'UserCtrl'
      }).
      when('/createpin', {
        templateUrl: 'partials/create-pin.html',
        controller: 'CreatePinCtrl'
      }).
      when('/user/boards', {
        templateUrl: 'partials/boards.html',
        controller: 'BoardCtrl'
      }).
      // when('/uploadpin', {
      //   templateUrl: 'partials/upload-pin.html',
      //   controller: 'UploadPinCtrl'
      // }).
      // .when('/photo/:id', {
      //   templateUrl: 'partials/detail.html',
      //   controller: 'DetailCtrl'
      // })
      otherwise({
        redirectTo: '/'
      });
  }]);