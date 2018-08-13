import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import './Navbar.css';

class CustomNavbar extends React.Component {

  loggedInStatusHandler = () => {
    console.log(this.props)
  };

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
            <Nav>
              <LinkContainer to={'/donator/setup-bank/'}>
                <NavItem eventKey={1} href="#">
                  Account Setup
                </NavItem>
              </LinkContainer>
              <LinkContainer to={'/get-started/'}>
                <NavItem eventKey={2} href="#">
                  Register
                </NavItem>
              </LinkContainer>
              <LinkContainer to={'/dashboard/'}>
                <NavItem eventKey={4} href="#">
                  Dashboard
                </NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} onClick={this.loggedInStatusHandler}>
                {localStorage.getItem('token') ? 'Log Out' : 'Login'}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);
