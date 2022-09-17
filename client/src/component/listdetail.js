import React, { useState } from "react";
import 'video.js/dist/video-js.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import gambar3 from '../image/Rectangle3.jpg';
import gambar4 from '../image/Rectangle65.jpg';
import AddEpisode from "./addepisode";

function Listdetail() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <div className='listd' variant="dark">
                <video
                    id="my-player"
                    class="video-js"
                    controls
                    preload="auto"
                    poster="https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2022/06/24/912685471.jpg"
                    data-setup='{}'>
                    <source src="https://youtu.be/fvCdLmxnkj0" type="video/mp4"></source>
                    <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
                    <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>

                </video>
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

                    <div className='d-flex  mt-5 pt-5 col-8 mx-auto' >
                        <Card style={{ backgroundColor: "black" }} className="px-4">
                            <Card.Img variant="top" src={gambar3} />

                        </Card>
                        <div class="col-md-5 text-light text-justify ">
                            <div class="card-body ">
                                <h2 class="card-title">Money Heist</h2>

                                <div className='d-flex text-muted'>
                                    <p >2017</p>
                                    <p className='ms-3 txt-mtd' style={{ border: "2px solid grey", borderRadius: "3px", padding: "3px" }}> Tv Series</p>
                                </div>


                                <br></br>

                                <p class='mt-2'>Money Heist is a crime drama on Netflix - originally called La Casa de Papel.
                                    Money Heist season 3 has just been released by the streaming service.
                                    The plot reads: "Eight thieves take hostages and lock themselves
                                    in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."</p>

                            </div>
                        </div>
                    </div>

                    < Card style={{ backgroundColor: "black" }} className="detailCard d-flex align-items-center">
                        <Card.Img variant="top" src={gambar4} />
                        <p className='text-light'>Money Heist : Episode 1</p>
                    </Card>






                </CardGroup>


            </div >

        </>


    )
}

export default Listdetail