app.factory("storage", function() {
  var userId = "";

  return {
    getUserId: function() {
      return userId;
    },
    setUserId: function(id) {
      userId = id;
    }
  };
});