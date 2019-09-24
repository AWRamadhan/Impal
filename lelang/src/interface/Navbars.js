import React, { Component } from "react";

class Navbars extends Component {
  render() {
    return (
      <div className="navbars">
        <div className="container-fluid">
          <div id="logo" className="pull-left">
            <h1>
              <a href="#intro" className="scrollto">
                Auction
              </a>
            </h1>
          </div>

          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#">Bid</a>
              </li>
              <li>
                <a href="#portfolio">Hot Product</a>
              </li>
              <li>
                <a href="#">Your Profile</a>
              </li>
              <li>
                <a href="#">Log Out</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbars;
