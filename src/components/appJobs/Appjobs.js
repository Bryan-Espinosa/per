import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { appJobs, getAppJobs, deleteJobs } from "../../ducks/jobsReducer";

class Appjobs extends Component {
  render() {
    let appJobsList =
      this.props.jobsReducer.appJobs &&
      this.props.jobsReducer.appJobs.map((jobs, index) => {
        return (
          <div key={index}>
            <button
              onClick={() =>
                this.props.deleteJobs(jobs.jobid).then(() => getAppJobs())
              }
            >
              Delete job
            </button>
            <p>{jobs.title}</p>
            <p>{jobs.pay}</p>
          </div>
        );
      });
    return (
      <div>
        <div>
          <p>Title</p>
          <p>Pay</p>
        </div>

        {appJobsList}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
};

export default connect(
  mapStateToProps,
  { getAppJobs, deleteJobs }
)(Appjobs);
const ProfileForm = styled.div`
  width: 45vw;
`;
