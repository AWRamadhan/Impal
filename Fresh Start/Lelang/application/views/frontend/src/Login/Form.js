import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./logo.svg";
import "../style.css";

class form extends Component {
	render() {
		return (
			<Jumbotron>
				<Form>
					<h3 className="text-center">Auction</h3>
					<div className="d-flex justify-content-center">
						<img className="center-content-logo" src={logo}></img>
					</div>
					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control type="password" placeholder="Enter password" />
					</Form.Group>
					<Container>
						<Row>
							<Col>
								<Button className="btn-dark" type="submit">
									Login
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

export default form;
