import React from 'react';
import Signup from './Signup/Signup';
import Dashboard from './Dashboard/Dashboard';


class Home extends React.Component {

  render() {
    return (
      <div>
        {localStorage.getItem('token') ? <Dashboard/> : <Signup/>}
      </div>
    )
  }
}

export default Home;