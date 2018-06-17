import React, { Component } from "react";
import axios from "axios";
import routes from "./routes";
import { getUser } from "./ducks/userReducer";
import { getJobs, getAppJobs } from "./ducks/jobsReducer";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props
      .getUser()
      .then(
        () =>
          this.props.userReducer.user
            ? this.props.getAppJobs(this.props.userReducer.user.userid)
            : console.log("user not found")
      );

    this.props.getJobs();
  }
  render() {
    console.log("jeeeeeeer", this.props.userReducer.user);

    return <div className="App">{routes}</div>;
  }
}
const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser, getJobs, getAppJobs }
)(App);
