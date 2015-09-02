app.controller("BoardsCtrl", ["$scope", "$q", "$firebaseArray", "$firebaseObject", "$location", "storage", "$filter",
  function($scope, $q, $firebaseArray, $firebaseObject, $location, storage, $filter) {
    var fb = new Firebase("https://pinterest-nss.firebaseio.com/pins");
    var fb2 = new Firebase("https://pinterest-nss.firebaseio.com/pins");
    var currentUid = storage.getUserId();
    $scope.pins = $firebaseArray(fb);
    var pinObj = $firebaseObject(fb2);
    $scope.boardArray = [];
    theBoardList = "";
    $scope.userPins = "";
    // for (var pin in pinObj) {
    //   console.log(pin, pinObj[pin]);
    // }
    $scope.pins.$loaded().then(function(){

    $scope.userPins = $filter('filter')($scope.pins, {'uid': currentUid});
    console.log("userPins", $scope.userPins);
    angular.forEach($scope.userPins, function(value, key) {
      console.log(key, value.board);
      $scope.boardArray.push(value.board);
    });
    console.log($scope.boardArray);
  });
    // var test = $filter('filter')($ in $scope.pins, {'uid': "facebook:10204939193188774"});
    console.log("pins", $scope.pins[0]);
    console.log("pins", pinObj);
    console.log("uid", currentUid);
    $scope.deletePin = function(key){
    $scope.pins.$remove(key);
  };
  }
]);