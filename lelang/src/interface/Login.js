import React, { Component } from "react";
import Header from "./Header";
import Navbars from "./Navbars";
class Login_Forms extends Component {
  render() {
    return (
      <div className="Login">
        <Navbars />
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
