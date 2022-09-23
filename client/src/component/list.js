import React from "react";
import { Table, Card, Dropdown } from "react-bootstrap";
import { API } from "../config/api";
import { useQuery } from "react-query";

const styles = {
    cardd: {
        backgroundColor: "black",
        margin: "20px",
    }
}


function List() {

    let { data: transactions } = useQuery("transactionsCache", async () => {
        const response = await API.get("/transactions");
        console.log("ini trans", transactions);
        return response.data.data;
    });
    return (
        <>
            <div>
                <Card style={styles.cardd}>
                    <Card.Body className="text-light m-3">
                        <Card.Title className="mb-4">Incoming Transaction</Card.Title>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr className="text-danger">
                                    <th>No</th>
                                    <th>Users</th>
                                    <th>Email</th>
                                    <th>Remaining Active</th>
                                    <th>Status User</th>
                                    <th>Status Payment</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {transactions?.map((item, id) => {
                                return (
                                    <tbody>
                                        <tr>

                                            <td>{item.id}</td>
                                            <td>{item.userId.fullname}</td>
                                            <td>{item.userId.email
                                            }</td>
                                            <td>30 /Hari</td>
                                            <td
                                                className={
                                                    item.userId.subscribe
                                                        !== "" &&
                                                        item.userId.subscribe !== "false"
                                                        ? "text-success"
                                                        : "text-danger"
                                                }
                                            >
                                                {item.userId.subscribe !== "" &&
                                                    item.userId.subscribe !== "false"
                                                    ? "Active"
                                                    : "Inactive"}
                                            </td>
                                            <td
                                                className={
                                                    item.status !== "" &&
                                                        item.status !== "success" &&
                                                        item.status !== "pending"
                                                        ? "text-success fw-bold"
                                                        : "text-warning fw-bold"
                                                }
                                            >
                                                {item.status}
                                            </td>
                                            <td>
                                                <Dropdown className="me-5">
                                                    <Dropdown.Toggle
                                                        variant="blue"
                                                        id="dropdown-basic"
                                                        style={{
                                                            backgroundColor: "none",
                                                            color: "blue",
                                                            border: "none",
                                                        }}
                                                        className="fs-4"
                                                    ></Dropdown.Toggle>
                                                    <Dropdown.Menu className="bg-dark">
                                                        <Dropdown.Item
                                                            href="#/action-1"
                                                            className="text-success text-center"
                                                        >
                                                            <span>Approved</span>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            href="#/action-2"
                                                            className="text-danger text-center"
                                                        >
                                                            <span>Cancel</span>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>

                                        </tr>


                                    </tbody>

                                )



                            })}
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </>

    );
}

export default List