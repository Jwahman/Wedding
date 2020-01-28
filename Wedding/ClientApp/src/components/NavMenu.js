import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import sun_wide4 from '../images/motljus1_wide4.jpg';



var sectionStyle = {
    backgroundImage: `url(${sun_wide4})`,
    width: "100%",
    //height: "700px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    //backgroundSize: "100%",
    boxShadow: "0 .25rem .75rem rgba(112, 130, 93)",
    marginBottom:"25px"
    
};

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
    }


  render () {
      return (
          <header style={sectionStyle}>
              <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white mb-3 navbar-main" style={{height: '650px', display: 'block'}} light >
        <Container>
            <NavbarBrand tag={Link} to="/">Johannes och Sofias br&ouml;llop</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                <ul className="navbar-nav flex-grow">
                    <NavItem>
                        <NavLink tag={Link} className="navbar-menu" to="/">Start</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink tag={Link} className="navbar-menu" to="/location">V&auml;gbeskrivning & Transport</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="navbar-menu" to="/information">Viktiga detaljer</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="navbar-menu" to="/osa">O.S.A.</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="navbar-menu" to="/toast">Toastmasters</NavLink>
                    </NavItem>
                </ul>
            </Collapse>
        </Container>
    </Navbar>
</header>
    );
  }
}


