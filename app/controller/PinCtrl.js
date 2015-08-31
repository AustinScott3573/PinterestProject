app.controller("PinCtrl", 
  ["$scope",
   "$routeParams",
   "$firebaseArray",
  function($scope,  $routeParams, $firebaseArray) {
   var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");
   
   // Data from firebase 
    $scope.pins = $firebaseArray(ref);

   console.log("PinCtrl", $scope.pins);

  }
]);
