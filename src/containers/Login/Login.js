import React from 'react';
import axios from 'axios-instance';
import {connect} from 'react-redux';
import {Input} from "../../components";

class Login extends React.Component {

  state = {
    inputs: [
      {
        name: 'username',
        placeholder: 'Username',
        label: 'Username'
      },
      {
        name: 'password',
        placeholder: 'Enter Password',
        label: 'Password',
        type: 'password'
      }
    ]
  };

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
          {this.state.inputs.map(options => (
            <Input {...options}/>
          ))}
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
