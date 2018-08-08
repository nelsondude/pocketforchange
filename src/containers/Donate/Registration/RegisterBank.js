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
      <div>
        <BankConnect
          message={'Open Link and connect to your bank!'}
          onSuccess={this.handleOnSuccess}
          onExit={this.handleOnExit}/>
      </div>
    )
  }
}

export default RegisterBank;