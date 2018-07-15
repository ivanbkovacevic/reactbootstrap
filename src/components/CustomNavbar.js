import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">MondoAnimale</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
               <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} to="/">
                   HOME
                </NavItem> 
                <NavItem eventKey={2} componentClass={Link} to="/about">
                   ABOUT
                </NavItem> 
                <NavItem eventKey={3} componentClass={Link} to="/news">
                   NEWS
                </NavItem> 
               </Nav> 
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;