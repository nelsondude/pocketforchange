import React, {Fragment} from 'react';
import BankConnect from 'components/BankConnect/BankConnect';
import axios from 'axios-instance';
import Button from 'components/Button/Button';

class Registration extends React.Component {
  state = {
    access_token: '',
    item_id: '',
  };

  submitHandler = (event) => {
    event.preventDefault();
    alert('form submitted');
  };

  handleOnSuccess = (token, metadata) => {
    axios.post('/plaid/get_access_token/', {'token': token})
      .then(res => {
        console.log(res);
        this.setState({
          access_token: res.data.access_token,
          item_id: res.data.item_id
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleOnExit = () => {
    alert('exiting ...');
  };

  render() {
    return (
      <div className='Registration'>
        <div className="row">
          <div className="col-xs-12">
            <form action="" onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" id="name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"/>
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