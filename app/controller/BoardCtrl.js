app.controller("BoardCtrl",
  ["$scope",
  "$routeParams",
  "$firebaseArray",
  "storage",
  function($scope, $routeParams, $firebaseArray, storage) {

  var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");
    $scope.pins = $firebaseArray(ref);
    

    $scope.boardTitle = {
      "board": ""
    };


    $scope.addBoard = function() {
      // Adds title to board key value in firebase
       $scope.pins.$add($scope.boardTitle);
      
    };
  }
]);
