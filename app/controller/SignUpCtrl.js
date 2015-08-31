app.controller("SignUpCtrl", 
  ["$scope",
   "$routeParams",
  "$firebaseObject",
  function($scope, $routeParams, $firebaseObject) {
    var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins/uid");
    var vm = this;

    vm.createUser = createUser;
    vm.login = login;

    function createUser() {

      ref.createUser({
        email: vm.email ,
        password: vm.password
      }, function(error, userData) {
        if (error) {
          switch (error.code) {
            case "EMAIL_TAKEN":
              console.log("The new user account cannot be created because the email is already in use.");
              break;
            case "INVALID_EMAIL":
              console.log("The specified email is not a valid email.");
              break;
            default:
              console.log("Error creating user:", error);
          }
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });
    } 
  }
]);