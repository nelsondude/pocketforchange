import React from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';
import {withRouter} from "react-router";

class navbar extends React.Component {

  loggedInStatusHandler = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    } else {
      this.props.history.push('/login');
    }
  };

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Pocket for Change</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/donator/setup-bank/'}>
              <NavItem eventKey={1} href="#">
                Account Setup
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/donate/register/'}>
              <NavItem eventKey={2} href="#">
                Register
              </NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title="Drop" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={this.loggedInStatusHandler}>
              {localStorage.getItem('token') ? 'Log Out' : 'Login'}
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withRouter(navbar);
