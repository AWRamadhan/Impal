import React, { Component } from "react";
import Navbar from "../Navbar";
import Carousel from "./Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Info from "./Information";
import info from "./info.svg";
import "../style.css";

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<Navbar />
				<Jumbotron>
					<Carousel />
					<div className="d-flex justify-content-center">
						<img className="mx-auto center-content" src={info}></img>
					</div>
					<Container>
						<Row>
							<Col>
								<Info />
							</Col>
							<Col>
								<Info />
							</Col>
							<Col>
								<Info />
							</Col>
						</Row>
					</Container>
				</Jumbotron>
				<Card>
					<Card.Body>
						<blockquote className="blockquote mb-0">
							<p>
								{" "}
								Ada orang yang percaya kalau berpegang dan bertahan adalah tanda
								kekuatan. Akan tetapi, ada saat di mana dibutuhkan lebih banyak
								lagi kekuatan untuk tahu kapan harus melepaskan sesuatu dan
								melakukannya{" "}
							</p>
							<footer className="blockquote-footer">Ann Landers​</footer>
						</blockquote>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Home;
