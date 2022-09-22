import React, { useState, useEffect, useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
// Import useMutation


// Import API config
import { API } from "../config/api";
import { useQuery } from 'react-query';
import { UserContext } from '../context/userContext';

function Listfilm(props) {
    // Fetching product data from database
    const [state] = useContext(UserContext);
    console.log("ini state", state)
    let { data: films } = useQuery('filmsCache', async () => {
        const response = await API.get('/films');
        console.log("ini response", response)
        return response.data.data;
    });

    const [category, setCategory] = useState("Movies")


    return (
        <div>
            <div style={{ backgroundColor: "black" }} className='d-flex'>
                <div className='d-flex'>
                    <h2 className='text-light ms-4 mt-2'> List Film</h2>
                </div>

                <div className='d-flex mb-2 mt-2 border border-dark'>
                    <select value={category} onChange={(e) => setCategory(() => e.target.value)} name="list" id="list">
                        <option disabled selected>Category</option>
                        <option>Movies</option>
                        <option>TV Series</option>
                    </select>

                </div>

                <div className='d-flex ms-auto p-2'>
                    <Button as={Link} to="/addfilm" variant="danger">
                        Add Film
                    </Button>
                </div>
            </div>
            <div style={{ backgroundColor: "black" }}>

                {category == "Movies" ? (
                    <h2 className="ms-4">Movies</h2>
                ) :
                    (
                        <h2 className=" ms-4">TV Series</h2>
                    )
                }

                <Row>
                    {props.category == "tv-series" ? films?.map((films, index) => {

                        return (

                            <Col sm={6} md={4} lg={3} xl={2}>

                                <div className='d-flex mx-auto pt-2 ' key={index} >

                                    <Card style={{ backgroundColor: "black" }} className="px-2">
                                        <Link to={`/listdetails/${films.id}`} className="text-decoration-none" >
                                            <Card.Img variant="top" src={films.thumbnailfilm} style={{ width: '200px', height: '300px', objectFit: "cover" }} />
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
                    }) : films?.map((films, index) => {
                        return (
                            <Col sm={6} md={4} lg={3} xl={2}>
                                <div className='d-flex mx-auto pt-2 ' key={index}>
                                    <Card style={{ backgroundColor: "black" }} className="px-2">
                                        <Link to={`/listdetails/${films.id}`} className="text-decoration-none" >
                                            <Card.Img variant="top" src={films.thumbnailfilm} style={{ width: '200px', height: '300px', objectFit: "cover" }} />
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