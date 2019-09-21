import React, { Component } from "react";
import Navbars from "./Navbars";
import { Jumbotron } from "react-bootstrap";

class UserPelelang extends Component {
  render() {
    return (
      <div className="UserPelelang">
        <Navbars />
        <Jumbotron>
          <h3 className="text-center">Pelelang</h3>
          <div className="btn-group-lg text-center" role="group">
            <button type="button" className="btn btn-primary">
              Input Barang Lelang
            </button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default UserPelelang;
