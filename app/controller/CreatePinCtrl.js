// + button
// tooltip with "pin from website" and "upload a pin"


app.controller("CreatePinCtrl", ["$scope", "$q", "$firebaseArray", "$location", function($scope, $q, $firebaseArray, $location){
  var fb = new Firebase("https://pinterest-nss.firebaseio.com/pins");
  $scope.pins = $firebaseArray(fb);
  $scope.newPin = {
    "uid": "",
    "url": "",
    "image": "",
    "text": {
      "title": "",
      "description": ""
    }
  };

  $scope.addPin = function() {
    $scope.pins.$add(
      $scope.newPin
    );
    $scope.newPin = {
      "uid": "",
      "url": "",
      "image": "",
      "text": {
        "title": "",
        "description": ""
      }
    }
    $location.url('/');
  };

  $scope.closeAddPin = function() {
    $scope.newPin = {
      "uid": "",
      "url": "",
      "image": "",
      "text": {
        "title": "",
        "description": ""
      }
    };
    $location.url('/');
  };
}
]);
