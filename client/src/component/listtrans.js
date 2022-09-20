import React, { useState } from 'react'
import { useNavigate as navigate, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar';
import image1 from '../image/dumbflix.png';
import image2 from '../image/Ellipse 1.png';
import image3 from '../image/Vector.png';
import Nav from 'react-bootstrap/Nav';
import image4 from '../image/logout1.png';
import { useEffect } from "react";
import { UserContext } from '../context/userContext'
import { useContext } from "react";


export default function Listtrans() {
    const [isLogin, setIsLogin] = useState(true);
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);
    const user = localStorage.getItem('token')
    const [show, setShow] = useState(false);

    const [state, dispatch] = useContext(UserContext)
    const registerHere = (e) => {
        e.preventDefault();
        setRegisterShow(false);
        setLoginShow(true);
    };

    const loginHere = (e) => {
        e.preventDefault();
        setLoginShow(false);
        setRegisterShow(true);
    };

    const Navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        Navigate('/')
    }

    useEffect(() => {
        if (user) {
            setIsLogin(true)
        } else setIsLogin(false)
    }, [state, handleLogout]);

    return (

        <Navbar bg="dark" expand="lg" className="sticky-sm-top">
            <Container variant="dark">
                <Navbar.Brand href="/list">
                    <img
                        alt=""
                        src={image1}
                        width="70"
                        backgroundColor={"black"}
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Brand >
                    <Navbar variant="dark" bg="dark" expand="lg" >
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbar-black-example" className='bg-dark' />
                            <Navbar.Collapse id="navbar-black-example" className='bg-dark'>
                                <Nav >
                                    <img
                                        alt=""
                                        src={image2}
                                        width="40"
                                        backgroundColor={"black"}
                                        height="40"

                                    />{' '}
                                    <Dropdown>
                                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu variant='dark'>
                                            <Dropdown.Item href="/listfilms" className='d-flex '>
                                                <img src={image3} alt="image3" />
                                                <p className='text-danger  mx-2 mt-3 mb-2'>Film</p>
                                            </Dropdown.Item>
                                            <hr></hr>
                                            <Dropdown.Item href="/" onClick={handleLogout} className='d-flex ' >
                                                <img src={image4} alt="image4" />
                                                <p className='text-danger  mx-2 mt-3 mb-2'>Log out</p>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Navbar.Brand>
            </Container>
        </Navbar >


    )
}

