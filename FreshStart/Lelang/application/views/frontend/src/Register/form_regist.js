import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./logo.svg";
import "../style.css";

class register extends Component {
	render() {
		return (
			<Jumbotron className="form-login">
				<Form>
					<h3 className="text-center">Auction</h3>
					<div className="d-flex justify-content-center">
						<img className="center-content-logo" src={logo}></img>
					</div>
					<div class="row">
						<div class="col">
							<Form.Group controlId="formFirstName">
								<Form.Control type="text" placeholder="First Name" />
							</Form.Group>{" "}
						</div>
						<div class="col">
							<Form.Group controlId="formLastName">
								<Form.Control type="text" placeholder="Last Name" />
							</Form.Group>
						</div>
					</div>
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Email" />
					</Form.Group>
					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Form.Group controlId="formIDNumber">
						<Form.Control type="email" placeholder="Nomer KTP/Passport/SIM" />
					</Form.Group>
					<Form.Group controlId="formAddress">
						<Form.Control type="text" placeholder="Alamat Lengkap" />
					</Form.Group>
					<Form.Group controlId="formKota">
						<Form.Control type="text" placeholder="Kota" />
					</Form.Group>
					<Form.Group controlId="formProvinsi">
						<Form.Control type="text" placeholder="Provinsi" />
					</Form.Group>
					<Form.Group controlId="formZIPCode">
						<Form.Control type="text" placeholder="Kode ZIP" />
					</Form.Group>

					<Container>
						<Row>
							<Col>
								<Button className="btn-dark" type="submit">
									Ask?
								</Button>
							</Col>
							<Col>
								<Button className="btn-dark" type="submit">
									Register
								</Button>
							</Col>
						</Row>
					</Container>
				</Form>
			</Jumbotron>
		);
	}
}

export default register;
