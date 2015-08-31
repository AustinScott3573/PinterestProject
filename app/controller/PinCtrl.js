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
      $('#createPins').popover({
        placement : 'left',
        trigger : 'click',
        html: true,
        content: '<a href="#" class="btn btn-block btn-sm btn-default"><span class="glyphicon glyphicon-arrow-up"></span> Upload a pin</a><a href="#/createpin" class="btn btn-block btn-sm btn-default"><span class="glyphicon glyphicon-globe"></span> Pin from website</a>'
      });
    });
  }
]);
