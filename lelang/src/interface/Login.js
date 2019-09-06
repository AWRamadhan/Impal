import React, { Component } from "react";
import Header from "./Header";
class Login_Forms extends Component {
  render() {
    return (
      <div className="Login">
        <Header />
        <form>
          <h2>Login</h2>
          <p>Username</p>
          <input type="text"></input>
          <p>Password</p>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default Login_Forms;
