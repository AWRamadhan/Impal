import React, { Component } from "react";
import pict_bid from "./bid.png";
import Jumbotron from "react-bootstrap/Jumbotron";
import "../style.css";

class items extends Component {
	render() {
		return (
			<div className="Items">
				<Jumbotron>
					<img src={pict_bid}></img>
					<h4>Item Name</h4>
					<h5>Start Price : Rp6969</h5>
					<h5>Current Price : Rp6969</h5>
					<h5>Expire at : 69-69-69</h5>
					<h4 className="text-center countdown">00:00</h4>
				</Jumbotron>
			</div>
		);
	}
}

export default items;
