import React from 'react';
import axios from 'axios-instance';
import {connect} from 'react-redux';

class Login extends React.Component {

  loginHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    axios.post('api-token-auth/', data)
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
        }
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.loginHandler}>
          <div className="form-group">
            <label htmlFor="name">Username</label>
            <input
              required
              className="form-control"
              id="username"
              name="username"
              placeholder="Username"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              required
              className="form-control"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"/>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  ...dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
