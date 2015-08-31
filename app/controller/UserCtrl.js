app.controller("UserCtrl", [ "$scope", "$firebaseArray", "storage", function($scope, $firebaseArray, storage) {

  var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");

  $scope.pins = $firebaseArray(ref);
  
  $scope.uid = storage.getUserId();

  console.log(storage.getUserId());
}]);