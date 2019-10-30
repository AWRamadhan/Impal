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

export default login;
