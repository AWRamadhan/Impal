import React, { Component } from "react";
import Navbars from "./Navbars";
import Header from "./Header";
import { Jumbotron } from "react-bootstrap";

import "../assets/lib/font-awesome/css/font-awesome.min.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/ionicons/css/ionicons.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/lightbox/css/lightbox.min.css";
import "../assets/css/style.css";
import "../assets/lib/bootstrap/css/bootstrap.min.css";

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
