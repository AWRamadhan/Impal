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
          <h3 className="text-center">Login Page</h3>
          <form className="text-center">
            <div className="form-group">
              <label>Username</label>
              <input
                type="email"
                className="form-control"
                id="username"
                placeholder="Enter Username"
              ></input>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              ></input>
            </div>
            <button className="btn btn-primary" type="submit">
              Masuk
            </button>
          </form>
        </Jumbotron>
      </div>
    );
  }
}

export default Login_Forms;
