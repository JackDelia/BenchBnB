var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    UserClientActions = require("../actions/UserClientActions"),
    hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return ({username: "", password: ""});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    UserClientActions.login(this.state.username,
      this.state.password);
    this.setState({username: "", password: ""});
    hashHistory.push("/");
  },

  render: function(){

    return(
      <form className="login-form" onSubmit={this.handleSubmit}>

        <label>Username:
          <input type="text" valueLink={this.linkState("username")}/>
        </label><br/>

      <label>Password:
          <input type="password" valueLink={this.linkState("password")}/>
        </label><br/>

      <input type="submit"/>
      </form>
    );
  }
});
