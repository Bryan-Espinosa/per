import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { appJobs, getAppJobs } from "../../ducks/jobsReducer";

class Jobstable extends Component {
  render() {
    console.log(this.props);
    let jobsList =
      this.props.jobsReducer.jobs &&
      this.props.jobsReducer.jobs.map((jobs, index) => {
        return (
          <div key={index}>
            <button
              onClick={() =>
                this.props
                  .appJobs(jobs.jobid, this.props.userReducer.user.userid)
                  .then(() => getAppJobs())
              }
            >
              Apply
            </button>

            <p>{jobs.title}</p>
            <p>{jobs.description}</p>
            <p>{jobs.pay}</p>
          </div>
        );
      });
    return (
      <ProfileForm>
        <div>
          <div>
            <p>Title</p>
            <p>Description</p>
            <p>Pay</p>
          </div>

          {jobsList}
        </div>
      </ProfileForm>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
};
export default connect(
  mapStateToProps,
  { appJobs, getAppJobs }
)(Jobstable);
const ProfileForm = styled.div`
  width: 45vw;
`;
