import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import "./Navigation.css";

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand><Link to='/'><img src="/../img/event-organizer.png" height="45px" alt="Event Organizer"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to='/users'>Users</Nav.Link>
                <Nav.Link as={Link} to='/venues'>Venues</Nav.Link>
                <Nav.Link as={Link} to='/reservation'>Reservations</Nav.Link>
            </Nav>
            <Link to="/login"><Button variant="outline-primary" className='login-btn'>Log In</Button></Link>
            <Link to="/register"><Button variant="outline-light">Register</Button></Link>
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