app.controller("PinCtrl", 
  ["$scope",
   "$routeParams",
   "$firebaseArray",
   "storage",
  function($scope,  $routeParams, $firebaseArray, storage) {
   var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");
   var newPin = {};
   // Data from firebase 
    $scope.pins = $firebaseArray(ref);

   console.log("PinCtrl", $scope.pins);

    angular.element(document).on("click", ".pinit", function(){
      var id = angular.element(this).parent()[0].id;
      console.log(id);
      console.log($scope.pins);

      angular.forEach($scope.pins, function(value, key) {
        if(value.text.title===id){
          //save the matching value to pin
          newPin = value;
        }



        //on another button click (final pin button in the modal)
          //take the text input from modal
          //and change the description to match the new text
          //then push the new pin object to the user's array
      });
    });


    angular.element("#savePinButton").on("click", function(){
      var text = angular.element("#commentInput").val();
      var title = angular.element("#titleInput").val();
      console.log(text, title);
      console.log(newPin);
      console.log(storage.getUserId());

      
    });

  }
]);
