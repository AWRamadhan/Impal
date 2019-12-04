import React, { Component } from "react";
import Navbar from "../Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form"
import SI from "./SempakIndomaret.png";
import "../style.css";

class Checkout extends Component {
	render() {
		return (
            <div className="Checkout">
                <Navbar />
                <Container>
                    <Row>
                        <Col sm={8}>
                            <Card style={{ marginTop : "5%" }}>
                                <Card.Body>
                                    <Card.Title>Checkout</Card.Title>
                                    <Card.Title>Alamat Pengiriman</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted" style={{ marginTop : "3%" }}>Crazy Rich Wira</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted" style={{ marginTop : "1%" }}>081313085948</Card.Subtitle>
                                    <Card.Text className="mb-2 text-muted">
                                        Komplek Ciganitri Permai 1 No 6, Cipagalo, Bojongsoang, Bandung, 40287
                                    </Card.Text>
                                    <ButtonToolbar style={{ marginTop: "5%"}}>
                                        <Button variant="outline-primary">Pilih Alamat Lain</Button>
                                        <Button variant="outline-primary" style={{ marginLeft: "5%"}}>Kirim Kebanyak Alamat</Button>
                                    </ButtonToolbar>
                                </Card.Body>
                            </Card>
                            <Card style={{ marginTop : "5%" }}>
                                <Row>
                                    <Col sm={8}>
                                        <Card.Body>
                                            <Card.Title>Toko Amri</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Bandung</Card.Subtitle>
                                            <Row>
                                                <Col sm={4}>
                                                    <Card.Img variant="top" src={SI}/>
                                                </Col>
                                                <Col sm={8}>
                                                    <Card.Title>Sempak Indomaret</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">Rp.1.000.000.000</Card.Subtitle>
                                                    <Card.Subtitle className="mb-2 text-muted">1 Barang (Putih)</Card.Subtitle>
                                                    <Card.Subtitle></Card.Subtitle>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Col>
                                    <Col sm={4}>
                                        <Dropdown style={{marginTop: "40%"}}>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                Pengiriman
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">JNE</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">JNT</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">POS INDONESIA</Dropdown.Item>
                                                <Dropdown.Item href="#/action-4">Ambil Ndiri</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col sm={4}>
                            <Card style={{ marginTop: '30%' }}>
                                <Card.Title style={{padding: "5%"}}>Ringkasan Belanja</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm={6}>
                                                Total Harga
                                            </Col>
                                            <Col sm={6}>
                                                Rp.1.000.000.000
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col sm={6}>
                                                Total Tagihan
                                            </Col>
                                            <Col sm={6}>
                                                Rp.1.000.000.000
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Form>
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Apakah anda sudah yakin dengan pesanan anda?" />
                                            </Form.Group>
                                            <Button variant="danger" type="Pesan" style={{paddingLeft: "30%", paddingRight: "30%"}}>
                                                Pilih Pembayaran
                                            </Button>
                                        </Form>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
		);
	}
}

export default Checkout;
