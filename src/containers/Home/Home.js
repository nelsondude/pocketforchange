import React from 'react';
import Button from 'components/Button/Button';
import { withRouter } from 'react-router-dom';


class Home extends React.Component {

  handleRegister = () => {
    this.props.history.push('/donator/register');
  };

  render() {
    return (
      <div>
        <h1>Pocket for Change Home</h1>
        <div className="col-sm-6">
          <h1 className="text-center">Organizations</h1>
          <Button>Set one up!</Button>
        </div>
        <div className="col-sm-6">
          <h1 className="text-center">Donators</h1>
          <Button clicked={this.handleRegister}>Register</Button>
        </div>
      </div>
    )
  }
}

export default withRouter(Home);