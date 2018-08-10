import React from 'react';
import Signup from './Signup/Signup';
import Dashboard from './Dashboard/Dashboard';


class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Pocket for Change Home</h1>
          <p className="lead">Lets see some donations :)</p>
        </div>
        {localStorage.getItem('token') ? <Dashboard/> : <Signup/>}
      </div>
    )
  }
}

export default Home;