import React, { Fragment } from 'react';

class Registration extends React.Component {

  submitHandler = (event) => {
    alert('Submitted form');
    event.preventDefault();
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