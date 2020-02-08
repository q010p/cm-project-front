import React, { useState } from 'react';


import logo from '../../../logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../index.css'
import { Button } from 'react-bootstrap'

import { NavLink } from 'react-router-dom';



const SideNavigation = () => {

    const handleClick = (event)=>{
        event.target.classList.toggle('App-sidenav-active-class')
        console.log(event.target.classList)
    }

    const closeClick = ()=>{
        document.getElementById('side-nav-id').style.display = 'none'
    }

    return (
        <div>
            <div id={'side-nav-id'} className="App-sidenav">
                <Button onClick={()=>closeClick()} className="side-nav-close-btn">close</Button>
                <img src={logo} className="App-logo" alt="logo" />
                <NavLink onClick={(e)=>handleClick(e)}  to="/admin/dashboard">
                    <p className="App-sidenav-link-inside">dashboard</p>
                </NavLink>
                <NavLink onClick={(e)=>handleClick(e)} className="A" to="/admin/forms">
                    <p className="App-sidenav-link-inside">forms</p>
                </NavLink> 
                <NavLink onClick={(e)=>handleClick(e)} className="" to="/admin/profile">
                    <p className="App-sidenav-link-inside">profile</p>
                </NavLink>
                <NavLink to="/admin/users">
                    <p className="App-sidenav-link-inside">users</p>
                </NavLink>
                <NavLink to="/admin/sys-admin/form">
                    <p className="App-sidenav-link-inside">manage forms</p>
                </NavLink>
            </div>
        </div>
    );
}

export default SideNavigation;