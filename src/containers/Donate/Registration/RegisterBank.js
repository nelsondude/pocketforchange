import React from 'react'
import axios from "axios-instance";
import BankConnect from "components/BankConnect/BankConnect";

class RegisterBank extends React.Component {

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

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 col-xs-offset-3 text-center">
          <BankConnect
            message={'Open Link and connect to your bank!'}
            onSuccess={this.handleOnSuccess}
            onExit={this.handleOnExit}/>
        </div>
      </div>
    )
  }
}

export default RegisterBank;