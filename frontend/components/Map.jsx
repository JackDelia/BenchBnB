var BenchStore = require("../stores/BenchStore"),
    React = require('react'),
    ClientActions = require("../actions/ClientActions"),
    hashHistory = require('react-router').hashHistory;




function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener('click', function() {
    infowindow.open(marker.get('map'), marker);
  });
}

module.exports = React.createClass({
  getInitialState: function(){
    return {benches: BenchStore.all(), markers: []};
  },

  componentDidMount: function(){
      this.listener = BenchStore.addListener(this.changed);
      var mapDOMNode = this.refs.map;
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
      this.map.addListener("idle", ClientActions.fetchBenches.bind(null, this.map));
      this.map.addListener("click", this.handleClick);
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  changed: function(){
    this.clearMarkers();

    this.setState({benches: BenchStore.all()});

    for(var k in this.state.benches){

      var marker = new google.maps.Marker({
        position: {lat: this.state.benches[k].lat, lng: this.state.benches[k].lng},
        map: this.map,
        title: this.state.benches[k].description
      });

      attachSecretMessage(marker, this.state.benches[k].description);

      this.state.markers.push(marker);
    }
  },

  clearMarkers: function(){
    this.state.markers.forEach(function(marker){
      marker.setMap(null);
    });

    this.setState({markers: []});
  },

  handleClick: function(e){
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    var coords = {lat: lat, lng: lng};
    hashHistory.push({
      pathname: "benches/new",
      query: coords
    });
  },
  render: function(){
    return (
      <div className="map" ref="map">

      </div>
    );
  }
});
