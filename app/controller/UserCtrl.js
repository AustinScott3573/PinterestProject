app.controller("UserCtrl", [ "$scope", "$firebaseArray", "storage", function($scope, $firebaseArray, storage) {

  var ref = new Firebase("https://pinterest-nss.firebaseio.com/pins");
  
  // Data from firebase 
  $scope.pins = $firebaseArray(ref);

  // Gets authentication ID for user page
  $scope.uid = storage.getUserId();

  console.log(storage.getUserId());



  angular.element(document).on("click", ".unpin", function(){
    var id = angular.element(this).parent().parent()[0].id;
    angular.forEach($scope.pins, function(value, key) {
      if(value.text.title===id){
        console.log($scope.pins[key]);
        $scope.pins.$remove($scope.pins[key]);
      }
    });
  });
}]);