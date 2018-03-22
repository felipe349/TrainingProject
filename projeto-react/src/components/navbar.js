import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
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

export default class NavbarX extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Frozen Food Delivery</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Router>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/catalogo">Catálogo</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/carrinho">Carrinho</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Perfil
                </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem>
                      Option 1
                  </DropdownItem>
                    <DropdownItem>
                      Option 2
                  </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Router>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
