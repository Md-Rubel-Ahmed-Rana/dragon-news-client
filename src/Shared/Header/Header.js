import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import LeftSide from '../LeftSide/LeftSide';

const Header = () => {
    const { user, providerLogOut } = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand> <Link to="/">Dragon News</Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='d-flex justify-content-center align-items-center'>
                            {
                                user?.uid ? 
                                <>
                                    <Nav.Link>{user?.displayName}</Nav.Link>
                                    <Nav.Link>
                                        {
                                            user.photoURL ? <img style={{ height: "40px", borderRadius: "50%" }} src={user?.photoURL} alt="" />
                                                    :
                                            <FaUserCircle />
                                        }
                                    </Nav.Link>
                                        <><Link onClick={providerLogOut} className='text-decoration-none bg-dark text-white py-2 px-3 rounded'>Log Out</Link> </>
                                </>
                                : <>
                                <Link to="/register">
                                    <button className='btn btn-primary mx-2'>Register</button>
                                </Link>
                                <Link to="/login">
                                    <button className='btn btn-primary mx-2'>Login</button>
                                </Link>
                                </>
                            }
                            
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSide />
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;