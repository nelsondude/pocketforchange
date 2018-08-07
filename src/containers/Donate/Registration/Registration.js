import React, {Fragment} from 'react';
import PlaidLink from 'react-plaid-link'

class Registration extends React.Component {
  //User name: user_good
  //Pass word: pass_good
  //Pin: credential_good

  submitHandler = (event) => {
    event.preventDefault();
    alert('form submitted');
  };

  handleOnSuccess = (token, metadata) => {
    console.log(token, metadata);
    alert('success!');
  };

  handleOnExit = () => {
    alert('exiting ...');
  };

  render() {
    return (
      <Fragment>
        <h1>Register to be a Donator!!!</h1>
        <form action="" onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                   placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <PlaidLink
          clientName={'Pocket For Change'}
          env={process.env.REACT_APP_PLAID_ENV}
          publicKey={process.env.REACT_APP_PLAID_PUBLIC_KEY}
          product={["auth", "transactions"]}
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
        >Open Link and connect to your bank!</PlaidLink>
      </Fragment>
    )
  }
}

export default Registration;