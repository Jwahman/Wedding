import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <div>
            <NavMenu />
            <div style={{ backgroundColor: '#7FC995' }}> 
                <Container>
              {this.props.children}
                </Container>
            </div>
      </div>
    );
  }
}
