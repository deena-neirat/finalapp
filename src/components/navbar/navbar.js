import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../navbar/navbar.css"
import img1 from "../imges/img1.png"
import React from 'react';
import { Outlet } from 'react-router-dom';

function Navgation() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className=' sticky-top backNavStyle' variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={img1} width="180px" height="80px" /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto"></Nav>

                        <Nav>
                            <Nav.Link href="#home" className='navlink'>Home</Nav.Link>
                            <Nav.Link href="#about" className='navlink'>About</Nav.Link>
                            <Nav.Link href="#treatment" className='navlink'>Treatment</Nav.Link>

                            <NavDropdown title="Registration" className='navlink'>
                                <NavDropdown.Item href="signUp">Sign-Up</NavDropdown.Item>
                                <NavDropdown.Item href="signIn">Sign-In</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Section" className='navlink'>
                                <NavDropdown.Item href="#">Assistent</NavDropdown.Item>
                                <NavDropdown.Item href="#">Doctor</NavDropdown.Item>
                                <NavDropdown.Item href="#">Secretary</NavDropdown.Item>
                                <NavDropdown.Item href="#">Student</NavDropdown.Item>
                                <NavDropdown.Item href="#">Pationt</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default Navgation;
