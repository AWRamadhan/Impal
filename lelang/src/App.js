import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    fetch("http://localhost:9000/login")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return <div>{this.state.apiResponse}</div>;
  }
}

export default App;
