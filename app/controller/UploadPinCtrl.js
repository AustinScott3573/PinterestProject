app.controller("UploadPinCtrl", ["$scope", "$q", "$firebaseArray", "$location", "storage",
  function($scope, $q, $firebaseArray, $location, storage) {
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

    $('#myModal3')
      .modal('show');

      $scope.uploadNewPin = function() {
        console.log($scope.newPin);
        var test = document.getElementById("uploadimage").value;
        var selectedFile = document.getElementById('uploadimage').files[0];
        console.log(selectedFile);
        console.log(localStorage.dataBase64);
        var gUrl = "https://api.imgur.com/3/image";
        var mUrl = "https://api.imgur.com/3/account/sqfisher/";
        $.ajax({
          url: gUrl,
          type: 'POST',
          headers: {
            Authorization: 'Client-ID 4ff4d561a18ac75',
            Accept: 'application/json'
          },
          data: {
            image: selectedFile,
            type: 'base64'
          },
        success: function(result) {
          var id = result.data.id;
          console.log(result);
          // window.location = 'https://imgur.com/gallery/' + id;
        }
      });
    };

  }
]);