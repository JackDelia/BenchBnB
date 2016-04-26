var Dispatcher = require("../dispatcher/Dispatcher"),
    ServerActions = require("../actions/ServerActions");

module.exports = {
  createBench: function(description, latitude, longitude){
    var benchObj = {description: description,
      lat: latitude,
      lng: longitude
    };

    $.ajax({
      method: "POST",
      url: "/benches",
      DataType: "json",
      success: ServerActions.receiveAll,
      data: {bench: benchObj}
    });

  },

  fetchBenches: function(map){
    var ne = map.getBounds().getNorthEast();
    var neObj = {lat: ne.lat(), lng: ne.lng()};

    var sw = map.getBounds().getSouthWest();
    var swObj = {lat: sw.lat(), lng: sw.lng()};

    $.ajax({
      method: "GET",
      url: "/benches",
      DataType: "json",
      success: ServerActions.receiveAll,
      data: {bounds: {ne: neObj, sw: swObj}}
    });
  }
};
