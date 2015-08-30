app.controller("LogCtrl", 
  ["$scope",
   "$routeParams",
   "$firebaseAuth",
  "$firebaseArray",
  function($scope, $routeParams, $firebaseAuth, $firebaseArray) {
    var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");
       
    // Data from firebase 
    $scope.pins = $firebaseArray(ref);

    $scope.auth = $firebaseAuth(ref);

    console.log("$scope.auth", $scope.auth);

    // Any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      console.log("authData", authData)
      $scope.authData = authData;
      console.log($scope.authData = authData);
    });
    console.log("$scope.pins", $scope.pins);
    return $scope.pins;
  }
]);
