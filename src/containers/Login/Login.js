import React from 'react';
import axios from 'axios-instance';
import {connect} from 'react-redux';
import {Input} from "../../components";
import {LOGIN, LOGOUT} from "../../store/actions";
import {withRouter} from "react-router";

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
          this.props.login(res.data.token);
          this.props.history.push('/dashboard/');
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
          {this.state.inputs.map((options, index) => (
            <Input key={index} {...options}/>
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
  login: (token) => dispatch({type: LOGIN, token: token}),
  logout: () => dispatch({type: LOGOUT})
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
