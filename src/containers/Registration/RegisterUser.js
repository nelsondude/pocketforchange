import React, {Fragment} from 'react';
import axios from 'axios-instance';
import {connect} from 'react-redux';
import {Inputs} from 'components';


class RegisterUser extends React.Component {
  state = {
    inputs: [
      {
        name: 'username',
        placeholder: 'John Smith',
        label: 'Full Name'
      },
      {
        name: 'email',
        placeholder: 'john@smith.com',
        label: 'Email Address',
        type: 'email'
      },
      {
        name: 'password1',
        placeholder: 'Password',
        label: 'Password',
        type: 'password'
      },
      {
        name: 'password2',
        placeholder: 'Confirm Password',
        label: 'Password Again',
        type: 'password'
      },
      {
        name: 'is_org',
        type: 'checkbox',
        label: 'Are you an organization?   ',
        input_class: 'form-check-input',
        label_class: 'form-check-label',
        classes: ['form-check'],
        onChange: (event) => this.setState({showRegisterOrg: event.target.checked})
      }
    ],
    showRegisterOrg: false,
    orgInputs: [
      {
        name: 'org_name',
        placeholder: 'Name of your organization',
        label: 'Organization/Charity Name'
      }
    ]
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
              <Inputs inputs={this.state.inputs} />
              {this.state.showRegisterOrg ? <Inputs inputs={this.state.orgInputs} /> : null}
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
