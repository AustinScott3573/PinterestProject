app.controller("PinCtrl", 
  ["$scope",
   "$routeParams",
   "$firebaseArray",
  function($scope,  $routeParams, $firebaseArray) {
    $scope.pinSearch="";
    var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");
    
    // Data from firebase 
    $scope.pins = $firebaseArray(ref);

    // $scope.auth = Auth;

    // // Any time auth status updates, add the user data to scope
    // $scope.auth.$onAuth(function(authData) {
    //   $scope.authData = authData;
    //   console.log($scope.authData = authData);
    // });

    angular.element('#find').on("click", function(e){
      e.preventDefault();
      var input = $scope.pinSearch;
      var allPinsArr = angular.element(".pins");
      //loop to sift through all pins filter
      angular.forEach(allPinsArr, function(value, key) {
        //loop to only check up to the length of input
        for(var i=0; i<input.length; i++){
          if(input.charAt(i)!==value.id.charAt(i)){
            // hide element from dom
            value.remove();
            // angular.element(value).css("display: ", "none");
            break;
          }
        }
      });
    });


    angular.element(document).on("click", ".pinit", function(){
      var id = angular.element(this).parent()[0].id;
      console.log(id);
      console.log($scope.pins);

      angular.forEach($scope.pins, function(value, key) {
        if(value.text.title===id){
          //push value to the local pins array
        }        
      });
    });
  }
]);
