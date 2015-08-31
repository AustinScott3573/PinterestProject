app.controller("SignUpCtrl", 
  ["$scope",
   "$routeParams",
  "$firebaseObject",
  function($scope, $routeParams, $firebaseObject) {
    var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins/uid");
    $scope.user = {
      "email": "",
      "password": ""
    };

    $scope.createUser = function() {

      ref.createUser($scope.user, function(error, userData) {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              $scope.message = "The new user account cannot be created because the email is already in use.";
              break;
            case "INVALID_EMAIL":
              $scope.message = "The specified email is not a valid email.";
              break;
            default:
              alert("Error creating user:", error);
          }
        } else {
          alert("Successfully created user account with uid:", userData.uid);
        }
      });
    }; 
  }
]);