import React, { useState } from 'react';


import logo from '../../../logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css'
import { Nav } from 'react-bootstrap'

import { NavLink } from 'react-router-dom';



const SideNavigation = () => {

    return (
        <div>
            <div className="App-sidenav">
                <img src={logo} className="App-logo" alt="logo" />
                <NavLink className="App-sidenav-active-class" to="/admin/dashboard">
                    <p className="App-sidenav-link-inside">dashboard</p>
                </NavLink>
                <NavLink className="" to="/admin/forms">
                    <p className="App-sidenav-link-inside">forms</p>
                </NavLink> 
                <NavLink className="" to="/admin/profile">
                    <p className="App-sidenav-link-inside">profile</p>
                </NavLink>
            </div>
        </div>
    );
}

export default SideNavigation;