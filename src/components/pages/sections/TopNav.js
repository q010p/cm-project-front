import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'





const TopNav = () => {

    const collapseClicked = (e) => {
            document.getElementById('side-nav-id').style.display = 'block' 
    }

    return (
        <Navbar className="App-top-nav" fixed="top" bg="primary" variant="dark" expand="lg">
            <Nav className="mr-auto">
                <Nav.Link onClick={(e) => { collapseClicked(e) }} className="App-nav-collapse-button" href="#home"><i className="fas fa-bars" /></Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default TopNav;