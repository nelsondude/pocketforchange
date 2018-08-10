import React, {Fragment} from 'react';

class Signup extends React.Component {

  handleRegisterDonate = () => {
    this.props.history.push('/donator/register');
  };

  handleRegisterOrg = () => {
    this.props.history.push('/organization/register');
  };

  render() {
    return (
      <Fragment>
        <div className="col-sm-6">
          <h1 className="text-center">Organizations</h1>
          <button className="btn btn-success btn-block" onClick={this.handleRegisterOrg}>Register</button>
        </div>
        <div className="col-sm-6">
          <h1 className="text-center">Donators</h1>
          <button className="btn btn-success btn-block" onClick={this.handleRegisterDonate}>Register</button>
        </div>
      </Fragment>
    )
  }
}

export default Signup;