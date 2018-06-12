import React, { Component } from "react";
import axios from "axios";
import routes from "./routes";

import "./App.css";

class App extends Component {
  componentDidMount() {
    axios.get("/api/test");
  }
  render() {
    return <div className="App">{routes}</div>;
  }
}

export default App;
