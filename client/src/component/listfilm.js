import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dataListfilm from '../dummyData/datalistfilm.js';
import datamovies from '../dummyData/datamovies.js';
import { Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Listfilm(props) {

    return (
        <div>
            <div style={{ backgroundColor: "black" }} className='d-flex'>
                <div className='d-flex'>
                    <h2 className='text-light ms-4'> List Film</h2>
                </div>

                <div className='d-flex'>
                    <Dropdown >
                        <Dropdown.Toggle variant="outline-secondar mx-3 text-light border" id="dropdown-basic">
                            Categori
                        </Dropdown.Toggle>
                        <Dropdown.Menu className=' bg-transparent border'>
                            <Dropdown.Item href="/listfilms/tv-series" className='text-light'>Tv Series</Dropdown.Item>
                            <Dropdown.Item href="/listfilms/movies" className='text-light'>Movies</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>

                <div className='d-flex ms-auto p-2'>
                    <Button as={Link} to="/addfilm" variant="danger">
                        Add Film
                    </Button>
                </div>
            </div>
            <div style={{ backgroundColor: "black" }}>

                <h2 className='mx-4' id="tvseries">{props.category == "tv-series" ? "TV Series" : "Movies"}</h2>
                <Row>
                    {props.category == "tv-series" ? dataListfilm.slice(0, 12).map((films, index) => {

                        return (

                            <Col sm={6} md={4} lg={3} xl={2}>

                                <div className='d-flex mx-auto pt-2 ' key={index}>

                                    <Card style={{ backgroundColor: "black" }} className="px-2">
                                        <Link to="/listdetails" className="text-decoration-none" >
                                            <Card.Img variant="top" src={films.img} style={{ width: '200px', height: '300px', objectFit: "cover" }} />
                                            <Card.Body className='text-light'>
                                                <Card.Title>{films.title}</Card.Title>
                                                <Card.Text>
                                                    {films.year}
                                                </Card.Text>
                                            </Card.Body>
                                        </Link>
                                    </Card>


                                </div>

                            </Col>

                        )
                    }) : datamovies.slice(0, 12).map((films, index) => {
                        return (
                            <Col sm={6} md={4} lg={3} xl={2}>
                                <div className='d-flex mx-auto pt-2 ' key={index}>
                                    <Card style={{ backgroundColor: "black" }} className="px-2">
                                        <Link to="/listdetails" className="text-decoration-none" >
                                            <Card.Img variant="top" src={films.img} style={{ width: '200px', height: '300px', objectFit: "cover" }} />
                                            <Card.Body className='text-light'>
                                                <Card.Title>{films.title}</Card.Title>
                                                <Card.Text>
                                                    {films.year}
                                                </Card.Text>
                                            </Card.Body>
                                        </Link>
                                    </Card>
                                </div>
                            </Col>
                        )
                    })
                    }
                </Row>


            </div>
        </div >





    )
}

export default Listfilm