import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from 'containers/Home/Home';
import RegisterUser from 'containers/Donate/Registration/RegisterUser';
import RegisterBank from 'containers/Donate/Registration/RegisterBank';
import Layout from 'containers/Layout/Layout';
import NotFound from 'containers/NotFound/NotFound';
import Login from 'containers/Donate/Login/Login';
import Dashboard from 'containers/Home/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/get-started/" component={RegisterUser}/>
            <Route exact path="/donator/setup-bank/" component={RegisterBank}/>
            <Route exact path="/login/" component={Login}/>
            <Route exact path="/dashboard/" component={Dashboard}/>
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
