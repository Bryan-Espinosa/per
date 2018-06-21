import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { appJobs, getAppJobs } from "../../ducks/jobsReducer";

class Jobstable extends Component {
  onApplyClick = jobid => {
    this.props
      .appJobs(jobid, this.props.userReducer.user.userid)
      .then(() => this.props.getAppJobs());
    console.log(this.props.jobsReducer.appJobs);
  };
  render() {
    let jobsList =
      this.props.jobsReducer.jobs &&
      this.props.jobsReducer.jobs.map((jobs, index) => {
        return (
          <div className="jobslist" key={index}>
            <p className="title"> {jobs.title}</p>
            <p className="desc">{jobs.description}</p>
            <p className="pay"> {jobs.pay}</p>

            <button onClick={() => this.onApplyClick(jobs.jobid)}>Apply</button>
          </div>
        );
      });
    return (
      <JobLayout>
        <div className="header">
          <p className="title">Title</p>
          <p className="desc">Description</p>
          <p className="pay">Pay</p>
          <p className="apply">Apply</p>
        </div>
        <div className="jobstable">
          <div className="joblist">{jobsList}</div>
        </div>
      </JobLayout>
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

const JobLayout = styled.div`
  display: flex;
  flex-direction: column;

  & div.jobslist {
    display: flex;
    flex-direction: row;
  }
  & div.header {
    display: flex
    flex-direction: row;
    width: 50vw;
    height: 5vh;
    font-weight: bold;
  }
  & div.header p.title {
    width: 125px;
  }
  & div.header p.desc {
    width: 175px;
  }
  & div.header p.pay {
    width: 100px;
  }
  & div.header p.apply {
    width: 100px;
  }
  & div.jobslist p.title {
    width: 125px;
  }
  & div.jobslist p.desc {
    width: 175px;
  }
  & div.jobslist p.pay {
    width: 100px;
  }
  & div.jobslist p.apply {
    width: 100px;
  }
 `;
