import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from 'containers/Landing/Landing';
import RegisterUser from 'containers/Registration/RegisterUser';
import Layout from 'containers/Layout/Layout';
import NotFound from 'containers/NotFound/NotFound';
import Login from 'containers/Login/Login';
import Dashboard from 'containers/Dashboard/Dashboard';
import {connect} from 'react-redux';
import {PrivateRoute, PublicRoute} from 'components/Routes';
import './App.css';
import Search from "containers/Search/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <PublicRoute exact loggedIn={this.props.auth.loggedIn} path="/" component={Landing}/>
            <PublicRoute exact loggedIn={this.props.auth.loggedIn} path="/get-started/" component={RegisterUser}/>
            <Route exact path="/login/" component={Login}/>
            <Route exact path="/search/" component={Search}/>
            <PrivateRoute exact loggedIn={this.props.auth.loggedIn} path="/dashboard/" component={Dashboard}/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ...dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
