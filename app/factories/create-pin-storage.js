app.factory("create-pin-storage", function() {
  var newPin = "";

  return {
    getPin: function() {
      return newPin;
    },
    setPin: function(key, val) {
      newPin[key] = val;
      console.log(key, val);
    }
  };
});