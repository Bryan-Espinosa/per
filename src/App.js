import React, { Component } from "react";
import axios from "axios";
import routes from "./routes";
import { getUser } from "./ducks/userReducer";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return <div className="App">{routes}</div>;
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(App);
