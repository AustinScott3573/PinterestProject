app.controller("PinCtrl", 
  ["$scope",
   "$routeParams",
   "$firebaseArray",
   "$location",
   "storage",
  function($scope,  $routeParams, $firebaseArray, $location, storage) {
    var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins"); 

    // Data from firebase 
    $scope.pins = $firebaseArray(ref);

    //this will fix my repeat bug
    var bugFixer = false;
    //this is the data we want to keep from the old pin
    var keyBoard = "";
    var keyUrl = "";
    var keyImage = "";

    
    //sets the newPin object to the pin object that was clicked
    $scope.getPin = function(key){
      console.log(key);
      //this prevents board getting added when it doesn't exist
      if(key.board!==undefined){
        keyBoard = key.board;
      }else{
        keyBoard = "";
      }
      //keep the url and the image
      keyUrl = key.url;
      keyImage = key.image;
      //adjust bug fixer for next click
      bugFixer = true;
    };

    angular.element("#savePinButton").on("click", function(){
      if(bugFixer){
      //the code inside this will only run once per click


      var newPin = {
        board: keyBoard,
        image: keyImage,
        text: {
          description: angular.element("#commentInput").val(),
          title: angular.element("#titleInput").val()
        },
        uid: storage.getUserId(),
        url: keyUrl
      };
      console.log(newPin);
      $scope.pins.$add(newPin);
      console.log($scope.pins);
      bugFixer=false;
      //////////
      }else{
        console.log("This rebelious button click function tried to run multiple times, but I stopped it.");
      }
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