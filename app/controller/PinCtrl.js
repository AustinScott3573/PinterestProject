app.controller("PinCtrl", 
  ["$scope",
   "$routeParams",
   "$firebaseArray",
  function($scope,  $routeParams, $firebaseArray) {
    var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");
       
    // Data from firebase 
    $scope.pins = $firebaseArray(ref);

    // $scope.auth = Auth;

    // // Any time auth status updates, add the user data to scope
    // $scope.auth.$onAuth(function(authData) {
    //   $scope.authData = authData;
    //   console.log($scope.authData = authData);
    // });
}
]);
