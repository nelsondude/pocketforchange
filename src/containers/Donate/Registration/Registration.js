import React, { Fragment } from 'react';
import axios from 'axios-instance';

class Registration extends React.Component {

  submitHandler = (event) => {
    event.preventDefault();
    axios.get('/donate/users/')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <h1>Register to be a Donator!!!</h1>
        <form action="" onSubmit={this.submitHandler}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text"/>
          <input type="submit" value="Submit" />
        </form>
      </Fragment>
    )
  }
}

export default Registration;