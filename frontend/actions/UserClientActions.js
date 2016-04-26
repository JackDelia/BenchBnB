var UserUtil = require("../utils/UserUtil");


module.exports = {
  fetchCurrentUser: UserUtil.fetchCurrentUser,
  createUser: UserUtil.createUser,
  login: UserUtil.login,
  logout: UserUtil.logout
};
