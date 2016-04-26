var BenchStore = require("../stores/BenchStore"),
    React = require('react'),
    ClientActions = require("../actions/ClientActions"),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ClientActions = require("../actions/ClientActions"),
    hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function(){
    return ({description: "",
      latitude: this.props.location.query.lat,
      longitude: this.props.location.query.lng});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ClientActions.createBench(this.state.description,
      this.state.latitude, this.state.longitude);
    this.setState({description: "", latitude: null, longitude: null});
    hashHistory.push("/");
  },

  render: function(){

    return(
      <form className="bench-form" onSubmit={this.handleSubmit}>

        <label>Description:
          <input type="text" valueLink={this.linkState("description")}/>
        </label><br/>

        <label>Latitude:
            <input type="number" step="any"
              valueLink={this.linkState("latitude")}/>
        </label><br/>

        <label>Longitude:
            <input type="number" step="any"
              valueLink={this.linkState("longitude")}/>
        </label><br/>

      <input type="submit"/>
      </form>
    );
  }
});
