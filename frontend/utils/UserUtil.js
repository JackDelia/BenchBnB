var Dispatcher = require("../dispatcher/Dispatcher"),
    UserServerActions = require("../actions/UserServerActions");

module.exports = {
  fetchCurrentUser: function(){
    $.ajax({
      method: "GET",
        url: "/users/1",
        success: UserServerActions.receiveCurrentUser,
        error: UserServerActions.receiveAuthErrors
      });
  },

  createUser: function(username, password){
    $.ajax({
      method: "POST",
        url: "/users",
        data: {user: {username: username, password: password}},
        success: UserServerActions.receiveCurrentUser,
        error: UserServerActions.receiveAuthErrors
      });
  },

  logout: function(){
    $.ajax({
      method: "DELETE",
        url: "/session",
        success: UserServerActions.receiveCurrentUser,
        error: UserServerActions.receiveAuthErrors
      });
  },

  login: function(username, password){
    $.ajax({
      method: "POST",
        url: "/session",
        data: {user: {username: username, password: password}},
        success: UserServerActions.receiveCurrentUser,
        error: UserServerActions.receiveAuthErrors
      });
  }

};
