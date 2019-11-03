import React, { Component } from "react";
import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import me from "./Me.jpg";
import "./Itemstyle.css";
import Navbar from "../Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import logo from "../Bid/bid_logo.svg";

class Itemlist extends Component {
	render() {
		return (
			<div className="Itemlist">
				<Navbar />
				<Container className="mgtop">
					<Row>
						<Col>
							<Jumbotron>
								<Carousel>
									<Carousel.Item>
										<img className="d-block w-100" src={me} alt="First slide" />
									</Carousel.Item>
									<Carousel.Item>
										<img className="d-block w-100" src={me} alt="Third slide" />
									</Carousel.Item>
									<Carousel.Item>
										<img className="d-block w-100" src={me} alt="Third slide" />
									</Carousel.Item>
								</Carousel>
							</Jumbotron>
							<div className="mgtopSet d-flex justify-content-center">
								<img className="logo" src={logo}></img>
							</div>
						</Col>
						<Col>
							<Jumbotron>
								<h1 className="text-center">Item Name</h1>
								<h5 className="text-justify">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</h5>
							</Jumbotron>

							<Jumbotron>
								<h1 className="text-center">Countdown</h1>
								<h1 className="text-center">00:00</h1>
								<Row>
									<Col>
										<h2 className="mgtop text-center">Start Price</h2>
										<h2 className="text-center">Rp 696969</h2>
									</Col>
									<Col>
										<h2 className="mgtop text-center">Current Price</h2>
										<h2 className="text-center">Rp 696969</h2>
									</Col>
								</Row>

								<Form.Group className="mgtopSet" controlId="formPrice">
									<Form.Control type="text" placeholder="Enter Price" />
									<Button
										className="btn-dark btn-lg btn-block mgtop"
										type="submit"
									>
										Set Price
									</Button>
								</Form.Group>
							</Jumbotron>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Itemlist;
