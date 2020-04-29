import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import "./Navigation.css";
import RoutePaths from 'constants/RoutePaths';

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand><Link to='/'><img src="/../img/event-organizer.png" height="45px" alt="Event Organizer"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <NavLink to={ RoutePaths.DASHBOARD }>   DASHBOARD   </NavLink>
            <NavLink to={ RoutePaths.USER }>        USER        </NavLink>
            <NavLink to={ RoutePaths.VENUE }>       VENUE       </NavLink>
            <NavLink to={ RoutePaths.RESERVATION }> RESERVATION </NavLink>
        </Navbar.Collapse>
    </Navbar>
    )
}

class Navigation extends Component {
    render() {
        return (
            <NavBar />
        )
    }
}

export default Navigation