import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import marmor2_wide from '../images/marmor2_wide.jpg';
import sun_wide from '../images/motljus1_wide.jpg';



//const myDiv = styled.div`
//  @font-face {
//    font-family: 'Zapfino';
//    src: url(${Zapfino}) format('truetype');
//    font-weight: normal;
//    font-style: normal;
// }
//`;
var sectionStyle = {
    backgroundImage: `url(${sun_wide})`,
    width: "100%",
    height: "700px",
    backgroundSize: "100%",
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


    //<Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3" light >

  render () {
      return (
          <header style={sectionStyle}>
    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white mb-3" light >
        <Container>
            <NavbarBrand tag={Link} to="/">Johannes och Sofias br&ouml;llop</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                <ul className="navbar-nav flex-grow">
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/">Br&ouml;llop</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/counter">Transport & V&auml;gbeskrivning</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/fetch-data">Kontakt och Info</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} className="text-dark" to="/osa">O.S.A.</NavLink>
                    </NavItem>
                </ul>
            </Collapse>
        </Container>
    </Navbar>
</header>
    );
  }
}


