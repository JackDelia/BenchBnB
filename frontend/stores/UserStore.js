var Store = require('flux/utils').Store,
    Dispatcher = require("../dispatcher/Dispatcher");

var _user = null;
var _auth_errors = [];

var UserStore = new Store(Dispatcher);

UserStore.errors = function() {
  return _auth_errors;
};

UserStore.current_user = function(){
  return _user;
}:

UserStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case "RECEIVE_USER":
      _user = payload.data;
      UserStore.__emitChange();
      break;
    case "RECEIVE_ERRORS"
      _auth_errors.push(payload.data);
      UserStore.__emitChange();
      break;
  }
};
