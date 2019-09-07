import React, { Component } from "react";
import Header from "./Header";
class Login_Forms extends Component {
  render() {
    return (
      <div className="Login">
        <Header />
        <form className="text-center">
          <div className="form-group"></div>
          <button type="submit">Masuk</button>
        </form>
      </div>
    );
  }
}

export default Login_Forms;
