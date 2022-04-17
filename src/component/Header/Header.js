import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    //SignOut Option
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand className='fw-bold' as={Link} to="/">Health-Coach</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="aboutMe">About Me</Nav.Link>
                            {user ?
                                <button className='btn btn-link text-decoration-none text-white' onClick={handleSignout}>Signout</button>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;