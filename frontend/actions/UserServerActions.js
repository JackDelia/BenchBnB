var Dispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  receiveCurrentUser: function(data){
    Dispatcher.dispatch({
      actionType: "RECEIVE_USER",
      data: data
    });
  },
  receiveAuthErrors: function(data){
    Dispatcher.dispatch({
      actionType: "RECEIVE_ERRORS",
      data: data
    });
  }
};
