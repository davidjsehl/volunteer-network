import React, { Component } from 'react';
import {
    Collapse,
    Media,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


class Main extends Component {

    constructor (props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">
                <Media style={{ maxWidth: '180px' }} object src="VNLogo.png" />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/events/">Events</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/organizations/">
                      Organizations
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Sign Up/Log In
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Individual</DropdownItem>
                      <DropdownItem>Organization</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Log In</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </div>;
    }
}

export default Main;