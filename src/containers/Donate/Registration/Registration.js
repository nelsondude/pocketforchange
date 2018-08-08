import React from 'react';
import BankConnect from 'components/BankConnect/BankConnect';
import axios from 'axios-instance';

class Registration extends React.Component {
  state = {
    access_token: '',
    item_id: '',
    name: '',
    email: '',
    password: '',
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleOnSuccess = (token) => {
    axios.post('/plaid/get_access_token/', {'token': token})
      .then(_ => {
        console.log('Successfully saved access/id tokens')
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleOnExit = () => {
    alert('exiting ...');
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className='Registration'>
        <div className="row">
          <div className="col-xs-12">
            <form action="" onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  onChange={this.handleInputChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleInputChange}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <BankConnect
              message={'Open Link and connect to your bank!'}
              onSuccess={this.handleOnSuccess}
              onExit={this.handleOnExit}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Registration;