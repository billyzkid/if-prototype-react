import React, { Component } from "react";
import logo from "./logo.svg";
import "whatwg-fetch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      message: null
    };
  }

  componentDidMount() {
    fetch("/api").then((response) => {
      if (!response.ok) {
        throw new Error(`status ${response.status}`);
      }
      return response.json();
    }).then((json) => {
      this.setState({
        fetching: false,
        message: `Fetch succeeded: ${json.message}`
      });
    }).catch((error) => {
      this.setState({
        fetching: false,
        message: `Fetch failed: ${error.message}`
      });
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<br />
          {this.state.fetching ? "Fetching message..." : this.state.message}
        </p>
      </div>
    );
  }
}

export default App;