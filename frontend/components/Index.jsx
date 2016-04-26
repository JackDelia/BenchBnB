var BenchStore = require("../stores/BenchStore"),
    React = require('react'),
    ClientActions = require("../actions/ClientActions");

module.exports = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all() };
  },

  componentDidMount: function(){
    this.listener = BenchStore.addListener(this.changed);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  changed: function(){
    this.setState({ benches: BenchStore.all() });
  },

  render: function(){
    var benchKeys = Object.keys(this.state.benches);
    var benchItems = benchKeys.map(function(bench){
      return <li className= "bench" key={bench}>{this.state.benches[bench].description}</li>;
    }.bind(this));

    return (
      <ul className="bench-index">
        {benchItems}
      </ul>
    );

  }
});
