import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import pict1 from "./header-auction.jpg";
import pict2 from "./header-auction2.jpg";
import pict3 from "./header-auction3.jpg";

class carousel extends Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<img className="d-block w-100" src={pict1} alt="First slide" />
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={pict2} alt="Third slide" />

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={pict3} alt="Third slide" />

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default carousel;
