import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from 'containers/Home/Home';
import Registration from 'containers/Donate/Registration/Registration';
import Layout from 'containers/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/donator/register" component={Registration}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
