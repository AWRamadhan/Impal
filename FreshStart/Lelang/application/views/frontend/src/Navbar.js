import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./logo.svg";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class navbar extends Component {
	render() {
		return (
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src={logo}
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					Auction
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Bid</Nav.Link>
						<NavDropdown title="Your Profile" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Items</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">On Going</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Check Out</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Edit Profile
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Log Out </NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default navbar;
