import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import bay_wide from '../images/bay_wide.jpg';
import cliff2_wide from '../images/cliff2_wide.jpg';
import marmor_wide from '../images/marmor_wide.jpg';

export class Layout extends Component {
  static displayName = Layout.name;
    //backgroundColor: '#7FC995'
  render () {
    return (
        <div>
            <NavMenu />
                <Container>
              {this.props.children}
                </Container>
      </div>
    );
  }
}
