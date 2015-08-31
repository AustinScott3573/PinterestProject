app.controller("PinCtrl", 
  ["$scope",
   "$routeParams",
   "$firebaseArray",
   "$location",
   "storage",
  function($scope,  $routeParams, $firebaseArray, $location, storage) {
    var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins"); 
    var newPin = {};  
    // Data from firebase 
    $scope.pins = $firebaseArray(ref);
    angular.element(document).on("click", ".pinit", function(){
      var id = angular.element(this).parent().parent()[0].id;
      console.log(id);
      console.log($scope.pins);

      angular.forEach($scope.pins, function(value, key) {
        if(value.text.title===id){
          //save the matching value to pin
          newPin = value;
          console.log(newPin);
        }
        //on another button click (final pin button in the modal)
          //take the text input from modal
          //and change the description to match the new text
          //then push the new pin object to the user's array
      });
    });


    angular.element("#savePinButton").on("click", function(){
      //retrieves the inputs for the 2 text fields
      var text = angular.element("#commentInput").val();
      var title = angular.element("#titleInput").val();
      //sets the newPin to the values of the text fields
      newPin.text.description = text;
      newPin.text.title = title;
      //sets the uid of newPin to the userId stored in the factory
      newPin.uid = storage.getUserId();

      console.log(text, title);
      console.log(newPin);

      // $scope.pins.push(newPin);
      $scope.pins.$add(newPin);
      newPin = {};
      console.log($scope.pins);
    });


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
