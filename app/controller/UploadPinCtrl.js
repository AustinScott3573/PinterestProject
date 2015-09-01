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
      var link;
      var selectedFile = document.getElementById('uploadimage').files[0];
      var fd = new FormData(); 
      fd.append("image", selectedFile);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image.json");
      xhr.onload = function() {   
        link = JSON.parse(xhr.responseText).data.link;
        console.log(link);
        $scope.newPin.image = link;
        $("#newImage").html("<img src=" + link + "><br><br>");
      };
      xhr.setRequestHeader('Authorization', 'Client-ID 4ff4d561a18ac75');
      xhr.send(fd);
      $('#myModal3')
            .modal('hide');
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