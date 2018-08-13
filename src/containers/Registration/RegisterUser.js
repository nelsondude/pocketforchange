import React from 'react';
import axios from 'axios-instance';
import {connect} from 'react-redux';

class RegisterUser extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    errors: [],
  };

  submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    axios.post('/accounts/register/', data)
      .then(res => {
        if (res.data.success) {
          localStorage.setItem('token', res.data.token);
          this.props.history.push('/donator/setup-bank/')
        } else {
          console.log('failure');
        }
      })
      .catch(err => {
        console.log('Could\'t register the user')
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
                  required
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="John Smith"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password1">Password</label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="password1"
                  name="password1"
                  placeholder="Password"/>
              </div>
              <div className="form-group">
                <label htmlFor="password2">Password Confirmation</label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="password2"
                  name="password2"
                  placeholder="Password Confirmation"/>
              </div>
              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
