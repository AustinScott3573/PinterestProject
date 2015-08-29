app.controller("PinCtrl", 
  ["$scope",
   "$routeParams",
   "$firebaseArray",
   "$firebaseAuth",
  function($scope,  $routeParams, $firebaseArray, $firebaseAuth) {
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
}
]);
