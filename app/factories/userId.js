app.factory("uidID", function() {
  var uid = null;
  return {
    getUid: function() {
      return uid;
    },
    setUid: function(sentID) {
      uid = sentID;
    }
  };
});