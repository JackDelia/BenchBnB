var BenchStore = require("./stores/BenchStore"),
    ApiUtils = require("./utils/ApiUtils"),
    React = require('react'),
    ReactDom = require('react-dom'),
    Index = require("./components/Index"),
    Map = require("./components/Map"),
    Search = require("./components/Search"),
    BenchForm = require("./components/BenchForm"),
    Login = require("./components/Login"),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;



var App = React.createClass({
  render: function(){
    return (<div className = "content">
      <h1>BenchBnB!</h1>

        {this.props.children}
    </div>);
  }
});



var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="benches/new" component={BenchForm}>
      </Route>
      <Route path="login" component={Login}>
      </Route>
    </Route>
  </Router>
);


ReactDom.render(Router,
  document.getElementById("root"));
