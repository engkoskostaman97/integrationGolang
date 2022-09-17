import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CgAttachment } from 'react-icons/cg';
import { AiOutlinePlus } from "react-icons/ai";
import Listtrans from './listtrans';
function Addfilm() {
    return (
        <>

            <div>
                <Listtrans />

            </div>
            <div style={{ backgroundColor: "black" }} >
                <div >
                    <h2 className='text-light col-2 d-flex justify-content-end'>Add Film</h2>
                </div>
                <form className='d-flex justify-content-center'>
                    <div className='row g-2 d-flex justify-content-center'>
                        <div style={{ width: "950px", marginLeft: "35px" }} >
                            <div className='form-floating'>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label></Form.Label>
                                    <Form.Control type="text" placeholder="Title" />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='form-floating'>
                                <Form.Group controlId="formFile" className=" mb-2 mt-4 ms-2 d-flex ">
                                    <Form.Label for="fileattach" className='d-block p-2 bg-white rounded' type="file" >Attach Thumbail<CgAttachment className="text-danger mx-2" /></Form.Label>
                                    <Form.Control type="file" id="fileattach" hidden />
                                </Form.Group>
                            </div>
                        </div>
                        <div className='col-10 d-flex justify-content-center'>
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="year" />
                        </div>
                        <div className='col-10 d-flex justify-content-center'>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Category</option>
                                <option value="1" for="tvseries">TV Series</option>
                                <option value="2">Movies</option>

                            </select>
                        </div>
                        <div className='col-10 d-flex justify-content-center input-group-lg '>
                            <Form.Label></Form.Label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Description' rows="3"></textarea>
                        </div>

                        <div className='row g-2 d-flex justify-content-center'>
                            <div style={{ width: "950px", marginLeft: "35px" }}>
                                <div className='form-floating'>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label></Form.Label>
                                        <Form.Control type="text" placeholder="Title Episode" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='col-2'>
                                <div className='form-floating'>
                                    <Form.Group controlId="formFile" className=" mb-2 mt-4 ms-2 d-flex ">
                                        <Form.Label for="fileattach" className='d-block p-2 bg-white rounded' type="file" >Attach Thumbail<CgAttachment className="text-danger mx-2" /></Form.Label>
                                        <Form.Control type="file" id="fileattach" hidden />
                                    </Form.Group>
                                </div>

                            </div>
                        </div>
                        <div className='col-10 d-flex justify-content-center'>
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="Link Film" />
                        </div>
                        <div className='col-10 '>
                            <Form.Group className="mb-3" controlId="add" >
                                <Button
                                    className=" text-center col-12  bg-white"
                                >
                                    <AiOutlinePlus className="text-danger" />
                                </Button>
                            </Form.Group>
                        </div>
                        <div className="col-10 d-flex justify-content-end">
                            <button class="btn btn-danger float-md-end btn-lg  d-grid gap-2 col-2 " type="button">save</button>

                        </div>

                    </div>


                </form>
            </div>
        </>
    )
}

export default Addfilm