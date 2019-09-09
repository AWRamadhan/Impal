import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
class Navbars extends Component {
  render() {
    return (
      <div className="navbars">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src="https://thumbs.dreamstime.com/b/auction-vector-stamp-isolated-white-background-84941491.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="AuctioN"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
