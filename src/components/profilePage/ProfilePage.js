import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import Jobstable from "../jobstable/Jobstable";
import Appjobs from "../appJobs/Appjobs";

class ProfilePage extends Component {
  render() {
    console.log("here here here", this.props);

    return (
      <div>
        <Navbar />
        <Jobstable />
        <Appjobs />
      </div>
    );
  }
}

export default ProfilePage;
