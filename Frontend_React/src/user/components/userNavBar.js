import "./userNavBar.css";
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';

function UserNavigationBar() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    useEffect(() => {
        const storedEmail = sessionStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    function logoutBtnClick(event) {
        alert("Logged out successfully");

        sessionStorage.clear();

        navigate('/');
    }
    return (
        <>

            <Navbar className="custom-navbar">
                <Container>
                    {/* <Navbar.Brand href="/">Career Crafter</Navbar.Brand> */}
                    <Nav className="me-auto custom-nav">
                        <Nav.Link href="/userHome/searchJobs">Search Jobs</Nav.Link>
                        <Nav.Link href="/userHome/myApplications">My Applications</Nav.Link>
                        <Nav.Link href="/userHome/resume">Resume</Nav.Link>
                        {/* <Nav.Link href="/userHome/profile">Profile</Nav.Link>
                        <Nav.Link href="#" onClick={(event) => logoutBtnClick(event)}>Logout</Nav.Link> */}
                    </Nav>
                    <Nav className="justify-content-end">
                        <Navbar.Text className="email-display">
                            Signed in as: {email}
                            {/* <a href="#login">Mark Otto</a> */}
                        </Navbar.Text>
                        <NavDropdown title={<i class="bi bi-person-circle fs-2"></i>} id="navbarScrollingDropdown" className="custom-nav-dropdown">
                            <NavDropdown.Item href="#" onClick={(event) => logoutBtnClick(event)}>Logout</NavDropdown.Item>
                            <NavDropdown.Item href="/userHome/profile">Profile</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}
export default UserNavigationBar;