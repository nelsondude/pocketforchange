import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from 'containers/Landing/Landing';
import RegisterUser from 'containers/Registration/RegisterUser';
import Layout from 'containers/Layout/Layout';
import NotFound from 'containers/NotFound/NotFound';
import Login from 'containers/Login/Login';
import Dashboard from 'containers/Dashboard/Dashboard';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/get-started/" component={RegisterUser}/>
            <Route exact path="/login/" component={Login}/>
            <Route exact path="/dashboard/" component={Dashboard}/>
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
