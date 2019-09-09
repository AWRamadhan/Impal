import React, { Component } from "react";
import Navbars from "./Navbars";
import Header from "./Header";
import { Jumbotron } from "react-bootstrap";
class home extends Component {
  render() {
    return (
      <div className="home">
        <Navbars />
        <Jumbotron>
          <Header />
        </Jumbotron>
      </div>
    );
  }
}

export default home;
