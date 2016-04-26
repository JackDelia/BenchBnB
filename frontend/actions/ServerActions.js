var Dispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  receiveAll: function(data){
    Dispatcher.dispatch({
      actionType: "GET_BENCHES",
      data: data
    });
  }
};
