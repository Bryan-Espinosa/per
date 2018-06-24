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
        <h1>Looking for work?</h1>
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
  width: 40vw;

  & h1 {
    width: 25vw;
    align-self: center;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
  }

  & div.jobslist {
    display: flex;
    flex-direction: row;
    & ::-webkit-scrollbar {
      display: none; // Safari and Chrome
    }
  }
  & div.header {
    display: flex;
    flex-direction: row;
    width: 40vw;
    height: 5vh;
    font-weight: bold;
  }
  & div.header p {
    height: auto;
    margin: 2vh 0;
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
  & div.jobslist p {
    height: auto;
    margin: 2vh 0;
  }
  & div.jobslist p.title {
    width: 125px;
  }
  & div.jobslist p.desc {
    width: 175px;
    max-height: 20vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  & div.jobslist p.pay {
    width: 100px;
  }
  & div.jobslist p.apply {
    width: 100px;
  }
  & div.jobslist button {
    text-decoration: none;
    border: none;
    background-color: #add8e6;
    border-radius: 20px;
    align-self: center;
    font-size: 13px;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    font-size: 22px;
    width: 50vw;

    & h1 {
      width: 30vw;
    }
    & div.header {
      width: 100%;
    }
    & div.header p.desc {
      display: none;
    }
    & div.jobslist p.desc {
      display: none;
    }
    & div.header p.pay {
      display: none;
    }
    & div.jobslist p.pay {
      display: none;
    }
    & div.header p.apply {
      text-align: end;
    }
    & div.jobslist button {
      font-size: 20px;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: flex;
    font-size: 35px;
    width: 50vw;
    & div.jobslist {
      display: flex;
      justify-content: space-between;
    }
    & h1 {
      width: 100%;
    }
    & div.header {
      width: 100%;
      margin: 2vh 0;
    }
    & div.header p {
      justify-content: space-between;
      width: 50%;
    }
    & div.header p.title {
      width: 50%;
    }
    & div.header p.apply {
      width: 50%;
    }
    & div.header p.desc {
      display: none;
    }
    & div.jobslist p.desc {
      display: none;
    }
    & div.header p.pay {
      display: none;
    }
    & div.jobslist p.pay {
      display: none;
    }
    & div.header p.apply {
      text-align: end;
    }
    & div.jobslist button {
      font-size: 35px;
    }
  }
`;
