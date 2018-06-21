import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { appJobs, getAppJobs, deleteJobs } from "../../ducks/jobsReducer";

class Appjobs extends Component {
  state = { appJobsArr: [] };

  onApplyClick = (e, jobid) => {
    this.props
      .deleteJobs(jobid)
      .then(() => this.props.getAppJobs())
      .then(() =>
        this.setState({ appJobsArr: this.props.appJobs }, () =>
          console.log(this.props.appJobs)
        )
      );
  };
  componentDidMount() {
    this.props.getAppJobs();
  }
  render() {
    console.log(this.props.appJobs);
    let appJobsList =
      this.props.appJobs &&
      this.props.appJobs.map((jobs, index) => {
        return (
          <AppliedJob key={index}>
            <button onClick={e => this.onApplyClick(e, jobs.jobid)}>
              Delete job
            </button>
            <p>Title: {jobs.title}</p>
            <p>Pay: {jobs.pay}</p>
          </AppliedJob>
        );
      });
    return <div>{appJobsList}</div>;
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    appJobs: state.jobsReducer.appJobs
  };
};

export default connect(
  mapStateToProps,
  { getAppJobs, deleteJobs }
)(Appjobs);

const AppliedJob = styled.div`
  display: flex;
  flex-basis: flex-start
  flex-direction: row;
  width: 5vw;
  height: 5%;
`;
