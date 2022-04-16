import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container>
                    <Navbar.Brand className='text-bold' as={Link} to="/">Heath-Coach</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <div className=''>

                            </div>
                        </Nav>
                        <Nav>
                            <Link className='text-decoration-none text-white pe-4' to="/services">Services</Link>
                            <Link className='text-decoration-none text-white pe-4' to="/blog">Blogs</Link>
                            <Link className='text-decoration-none text-white pe-4' to="/about">About</Link>
                            <Link className='text-decoration-none text-white pe-4' to="/login">Login</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;