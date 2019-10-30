import React, { Component } from "react";
import Navbar from "../Navbar";
import Items from "./Items";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./bid_logo.svg";

class bid extends Component {
	render() {
		return (
			<div className="bid">
				<Navbar />
				<div className="d-flex justify-content-center">
					<img className="bid-logo" src={logo}></img>
				</div>
				<h3 className="text-center">Bid</h3>
				<p className="text-center">Let's fuck this bitch</p>
				<div className="line"></div>
				<Container>
					<Row>
						<Col>
							<Items />
						</Col>
						<Col>
							<Items />
						</Col>
						<Col>
							<Items />
						</Col>
					</Row>
					<Row>
						<Col>
							<Items />
						</Col>
						<Col>
							<Items />
						</Col>
						<Col>
							<Items />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default bid;
