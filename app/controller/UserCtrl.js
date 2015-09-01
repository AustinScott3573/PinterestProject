app.controller("UserCtrl", [ "$scope", "$firebaseArray", "storage", function($scope, $firebaseArray, storage) {

  var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");
  
  // Data from firebase 
  $scope.pins = $firebaseArray(ref);

  // Gets authentication ID for user page
  $scope.uid = storage.getUserId();

  console.log(storage.getUserId());
}]);