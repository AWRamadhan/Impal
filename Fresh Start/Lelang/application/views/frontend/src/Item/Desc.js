import React, { Component } from "react";
import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";
import Carousel from 'react-bootstrap/Carousel'
import Container from "react-bootstrap/Container";
import me from "./Me.jpg";
import "./Itemstyle.css";

class Itemlist extends Component {
	render() {
		return (
			<div className="Itemlist">
                <Container>
                <Carousel >
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={me}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={me}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={me}
                        alt="Third slide"
                        
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Container>
			</div>
		);
	}
}

export default Itemlist;