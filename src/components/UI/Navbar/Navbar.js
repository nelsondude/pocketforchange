import React from 'react';
import {Button, FormControl, FormGroup, Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import './Navbar.css';
import {LOGOUT} from "../../../store/actions";
import {withRouter} from "react-router";

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    console.log('navbar', props);
  }

  loggedInStatusHandler = () => {
    if (this.props.loggedIn) {
      this.props.logout();
    } else {
      this.props.history.push('/login/');
    }
  };

  searchHandler = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div className="NavbarWrapper">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">PFC</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search"/>
              </FormGroup>
              <Button type="submit" onClick={this.searchHandler}>Submit</Button>
            </Navbar.Form>
            <Nav>

            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} onClick={this.loggedInStatusHandler}>
                {this.props.loggedIn ? 'Log Out' : 'Login'}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({type: LOGOUT})
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomNavbar));
