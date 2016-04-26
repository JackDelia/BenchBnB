var React = require('react'),
    Index = require("./Index"),
    Map = require("./Map");

module.exports = React.createClass({
  render: function(){
    return (
      <div className="search">
        <Map/>
        <Index/>
      </div>
    );
  }
});
