import React, { useState, useContext } from "react";
import 'video.js/dist/video-js.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import AddEpisode from "./addepisode";
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { API } from '../config/api';
import { UserContext } from '../context/userContext';

function Listdetail() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [state] = useContext(UserContext);
    let navigate = useNavigate();
    let { id } = useParams();

    let { data: film } = useQuery('filmCache', async () => {
        const response = await API.get('/film/' + id);
        console.log("ini response", response)
        return response.data.data;
    });
    return (
        <>
            <div className='listd' variant="dark">
                <iframe width="560" height="315" src={film?.linkfilm} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div style={{ backgroundColor: "black" }} >
                <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                    <Button
                        className="btn-addepisode"
                        onClick={handleShow}
                    >
                        Add Episode
                    </Button>

                    <AddEpisode show={show} handleClose={handleClose} />
                </div>
            </div>

            <div style={{
                backgroundColor: "black", width: "65% ", margin: "auto   "
            }}>
                < CardGroup className='d-flex align-items-center'>

                    <div className='d-flex mb-5 mt-1 pt-5 col-8 mx-auto' >
                        <Card style={{ backgroundColor: "black" }} className="px-4">
                            <Card.Img variant="top" src={film?.thumbnailfilm} />

                        </Card>
                        <div class="col-md-5 text-light text-justify ">
                            <div class="card-body ">
                                <h2 class="card-title">{film?.title}</h2>

                                <div className='d-flex text-muted'>
                                    <p >{film?.year}</p>
                                    <p className='ms-3 txt-mtd' style={{ border: "2px solid grey", borderRadius: "3px", padding: "3px" }}> Tv Series</p>
                                </div>


                                <br></br>

                                <p class='mt-2'>{film?.description}</p>

                            </div>
                        </div>
                    </div>

                    < Card style={{ backgroundColor: "black" }} className="detailCard d-flex align-items-center">
                        <Card.Img variant="top" src={film?.thumbnailfilm} />
                        <p className='text-light'>{film?.title}</p>
                    </Card>
                </CardGroup>
            </div >

        </>


    )
}

export default Listdetail