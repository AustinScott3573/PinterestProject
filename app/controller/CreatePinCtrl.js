// + button
// tooltip with "pin from website" and "upload a pin"


app.controller("CreatePinCtrl", ["$scope", "$q", "$firebaseArray", "$location", "storage", "create-pin-storage", 
  function($scope, $q, $firebaseArray, $location, storage, createPin){
  var fb = new Firebase("https://pinterest-nss.firebaseio.com/pins");
  $scope.pins = $firebaseArray(fb);
  $scope.newPin = {
    "uid": storage.getUserId(),
    "url": "",
    "image": "",
    "text": {
      "title": "",
      "description": ""
    }
  };
  $('#myModal2').modal('show');

  $scope.createNewPin = function(){
    $scope.newPin.url = $scope.newPin.url;
    console.log($scope.newPin.url);
    

    function proxify( request ) {
      request.url = "http://www.inertie.org/ba-simple-proxy.php?mode=native&url=" + encodeURIComponent( request.url );
      return request;
    }

    // Create an instance of ImageResolver
    // The proxy function is passed as an option
    var resolver = new ImageResolver( { requestPlugin : proxify } );
    resolver.register(new ImageResolver.FileExtension());
    resolver.register(new ImageResolver.NineGag());
    resolver.register(new ImageResolver.Instagram());
    resolver.register(new ImageResolver.ImgurPage());

    resolver.register(new ImageResolver.MimeType());
    resolver.register(new ImageResolver.Flickr( '6a4f9b6d16c0eaced089c91a2e7e87ad' ));
    resolver.register(new ImageResolver.Opengraph());
    resolver.register(new ImageResolver.Webpage());
    createPin.setPin("url", $scope.newPin.url);
    resolver.resolve( $scope.newPin.url, function( result ){
      if ( result ) {
        console.log( result );
        $("#newImage").html("<img src=" + result.image + "><br><br>");
        $("#newImage").append("<div class='form-group'><label>URL:</label><br><a href='" + $scope.newPin.url + "'><samp>" + $scope.newPin.url + "</samp></a></div>");
        $scope.newPin.image = result.image;
        createPin.setPin("image", result.image);
        $('#myModal2').modal('hide');
      } else {
        console.log( "No image found" );
        $('#myModal2').modal('hide');
      }
    });
  };

  $scope.addPin = function() {
    $scope.pins.$add(
      $scope.newPin
    );
    $scope.newPin = {
      "uid": "",
      "url": "",
      "image": "",
      "text": {
        "title": "",
        "description": ""
      }
    };
    $location.url('/pins');

  };

  $scope.closeAddPin = function() {
    $scope.newPin = {
      "uid": "",
      "url": "",
      "image": "",
      "text": {
        "title": "",
        "description": ""
      }
    };
    $location.url('/pins');
  };

  
}
]);
