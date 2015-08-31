app.controller("PinCtrl", 
  ["$scope",
   "$routeParams",
   "$firebaseArray",
   "$location",
  function($scope,  $routeParams, $firebaseArray, $location) {
    var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");
       
    // Data from firebase 
    $scope.pins = $firebaseArray(ref);

    // $scope.auth = Auth;

    // // Any time auth status updates, add the user data to scope
    // $scope.auth.$onAuth(function(authData) {
    //   $scope.authData = authData;
    //   console.log($scope.authData = authData);
    // });
    $(document).ready(function(){
      $('#createPins').tooltip({
        placement : 'left',
        trigger : 'click',
        html : 'true',
        title: 'my tooltip',
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner">Upload from website<br>Create own</div></div>'
    });
  });
  $scope.createPin = function() {
    // $location.url('/createpin');
    // $("#createPin").tooltip(); 

  };
}
]);
