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
          <div className="table" key={index}>
            <div className="info">
              <p className="title">{jobs.title}</p>
              <p className="pay"> {jobs.pay}</p>
              <button onClick={e => this.onApplyClick(e, jobs.jobid)}>
                Delete
              </button>
            </div>
          </div>
        );
      });
    return (
      <AppliedJob>
        <h1>Your submitted Applications!!</h1>
        <div className="header">
          <p className="title">Title</p>
          <p className="pay">Pay</p>
          <p className="delete"> Delete</p>
        </div>
        <div className="applist">{appJobsList}</div>
      </AppliedJob>
    );
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
  flex-direction: column;
  & h1 {
    align-self: auto;
    text-align: auto;
    font-weight: bold;
    font-size: 1.5em;
  }
  & div.info {
    display: flex;
    flex-direction: row;
  }

  & div.header {
    display: flex;
    flex-direction: row;
    width: 40vw;
    height: 5vh;
    font-weight: bold;
  }

  & div.header p.delete {
    width: 100px;
    height: 4vh;
  }

  & div.header p.title {
    width: 125px;
    height: 4vh;
  }
  & div.header p.pay {
    width: 100px;
    height: 4vh;
  }
  & div.info p.delete {
    width: 100px;
    height: 4vh;
  }
  & div.info p.title {
    width: 125px;
    height: 4vh;
  }
  & div.info p.pay {
    width: 100px;
    height: 4vh;
  }
  & div.info button {
    text-decoration: none;
    border: none;
    background-color: #add8e6;
    border-radius: 20px;
    align-self: center;
    font-size: 10px;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    justify-content: space-evenly;
    width: 40vw;
    overflow: visible;
    & h1 {
      margin-top: 7vh;
      height: 46vh;
    }
    & div.table {
      height: 30vh;
    }

    & div.info p.pay {
      display: none;
    }
    & div.header p.pay {
      display: none;
    }
    & div.header p.delete {
      text-align: end;
    }
    & div.header {
      height: 62.8vh;
    }
  }
  & div.header p.delete {
    text-align: end;
  }
`;
