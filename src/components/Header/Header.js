import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} href="/users">
                            Users
                        </NavItem>
                        <NavItem eventKey={2} href="/books">
                            Books
                        </NavItem>
                    </Nav>
                </Navbar>
        );
    }
}

export default Header;
