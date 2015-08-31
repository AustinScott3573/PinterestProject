app.controller("UserCtrl", [ "$scope", "$firebaseArray", "uidID", function($scope, $firebaseArray, uidID) {

  var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");

  $scope.uid = uidID.getUid();
  $scope.boards = $firebaseArray(ref);

  console.log(uidID.getUid());
}]);