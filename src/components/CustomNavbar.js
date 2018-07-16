import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar  fixedTop >
            <Navbar.Header>
                <Navbar.Brand >
                    <Link to="/">PAN BAU MAX</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
               <Nav pullRight bsStyle="tabs" activeKey={1} >
                <NavItem  eventKey={1} componentClass={Link} href="/" to="/">
                   Pocetna
                </NavItem> 
                <NavItem  eventKey={2} componentClass={Link} href="/Onama" to="/Onama">
                   O nama
                </NavItem> 
                <NavItem eventKey={3} componentClass={Link} href="/proizvodi" to="/proizvodi">
                   Proizvodi
                </NavItem> 
                <NavItem eventKey={4} componentClass={Link} href="/Reference" to="/Reference">
                  Reference
                </NavItem> 
                <NavItem eventKey={5} componentClass={Link} href="/Kontakt" to="/Kontakt">
                  Kontakt
                </NavItem> 
               </Nav> 
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;