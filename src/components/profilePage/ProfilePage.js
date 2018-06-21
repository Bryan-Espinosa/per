import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import Jobstable from "../jobstable/Jobstable";
import Appjobs from "../appJobs/Appjobs";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Something className="something">
          <Jobstable />
          <Appjobs />
        </Something>
      </div>
    );
  }
}

export default ProfilePage;
const Something = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  width: 100vw;
  margin: 2vw;
`;
