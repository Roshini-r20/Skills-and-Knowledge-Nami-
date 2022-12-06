import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom'

/**
* @author
* @function Header
**/

export const Header = (props) => {
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to= "/" className='navbar-brand'>Admin Dashboard</Link>
                    {/* <Navbar.Brand href='#home'>Admin Dashboard</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='mr-auto'>
                        </Nav>
                        <Nav>
                            {/* <Nav.Link href='#deets'>Sign In</Nav.Link> */}
                            <li  className="nav-item">
                                <NavLink to="signin" className="nav-link">Signin</NavLink>
                            </li>
                            <li  className="nav-item">
                                <NavLink to="signup" className="nav-link">Signup</NavLink>
                            </li>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}

export default Header