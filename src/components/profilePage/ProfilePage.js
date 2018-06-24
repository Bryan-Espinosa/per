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
  padding: 2vh 0 0 0;
  background-color: #8bfbf9;
  min-height: 80vh;
  justify-content: space-evenly;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: scroll;
    height: auto;
    min-height: 80vh;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: scroll;
    height: auto;
    min-height: 80vh;
  }
`;
