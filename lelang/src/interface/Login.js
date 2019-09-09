import React, { Component } from "react";
import Header from "./Header";
import Navbars from "./Navbars";
import { Jumbotron } from "react-bootstrap";
class Login_Forms extends Component {
  render() {
    return (
      <div className="Login">
        <Navbars />
        <Jumbotron>
          <Header />
          <form className="text-center">
            <div className="form-group"></div>
            <button type="submit">Masuk</button>
          </form>
        </Jumbotron>
      </div>
    );
  }
}

export default Login_Forms;
