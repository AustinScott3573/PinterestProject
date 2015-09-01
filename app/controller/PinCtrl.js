app.controller("PinCtrl", 
  ["$scope",
   "$routeParams",
   "$firebaseArray",
   "$location",
   "storage",
  function($scope,  $routeParams, $firebaseArray, $location, storage) {
    var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins"); 

    var newPin = {
      board: "",
      image: "",
      text: {
        description: "",
        title: ""
      },
      uid: "",
      url: ""
    };

    // Data from firebase 
    $scope.pins = $firebaseArray(ref);
    
    //sets the newPin object to the pin object that was clicked
    $scope.getPin = function(key){
      console.log(key);
      newPin.board = key.board;
      newPin.image = key.image;
      newPin.text.description = key.text.description;
      newPin.text.title = key.text.title;
      newPin.uid = key.uid;
      newPin.url = key.url;
      console.log(newPin);
    };

    //modifies the newPin object for the user who pinned it
    angular.element("#savePinButton").on("click", function(){
      //retrieves the inputs for the 2 text fields
      var text = angular.element("#commentInput").val();
      var title = angular.element("#titleInput").val();
      //sets the newPin to the values of the text fields
      console.log(newPin);
      newPin.text.description = text;
      newPin.text.title = title;
      //sets the uid of newPin to the userId stored in the factory
      newPin.uid = storage.getUserId();

      console.log(text, title);
      console.log(newPin);

      $scope.pins.$add(newPin);
      console.log($scope.pins);


      // angular.element("#commentInput").text() = "";
      // angular.element("#titleInput").text() = "";
      newPin = {
        board: "",
        image: "",
        text: {
          description: "",
          title: ""
        },
        uid: "",
        url: ""
      };
    });
    
    //displays the pin button on mouseover
    angular.element(document).on("mouseover", ".hideAndShow",  function(){
      angular.element(this).find(".pinit").css("display", "inline");
    });
    //hides the pin button on mouseout
    angular.element(document).on("mouseout",  ".hideAndShow", function(){
      angular.element(this).find(".pinit").css("display", "none");
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