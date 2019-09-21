import React, { Component } from "react";
import Navbars from "./Navbars";
import { Jumbotron } from "react-bootstrap";

class UserKolektor extends Component {
  render() {
    return (
      <div className="UserKolektor">
        <Navbars />
        <Jumbotron>
          <h3 className="text-center">Kolektor</h3>
          <div className="btn-group-lg text-center" role="group">
            <button type="button" className="btn btn-primary">
              Ikut Lelang
            </button>
            <button type="button" className="btn btn-primary">
              View Lelang
            </button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default UserKolektor;
