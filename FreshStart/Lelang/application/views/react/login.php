import React, { Component } from "react";
import Form from "./Form";
import "../style.css";
import Card from "react-bootstrap/Card";
class login extends Component {
	render() {
		return (
			<div className="login">
				<div className="d-flex justify-content-center">
					<Form />
				</div>
				<Card>
					<Card.Body>
						<blockquote className="blockquote mb-0">
							<p>
								{" "}
								Dari 0 kilometer Jogja : membasuh keras hati, menunggu kau
								menyapa kembali{" "}
							</p>
							<footer className="blockquote-footer">Wira Nagara</footer>
						</blockquote>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default login;
