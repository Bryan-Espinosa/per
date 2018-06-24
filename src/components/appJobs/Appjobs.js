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
          <div className="info" key={index}>
            <p className="title">{jobs.title}</p>
            <p className="pay"> {jobs.pay}</p>
            <div className="del">
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
          <p className="delete">Delete</p>
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
  align-items: center;
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
    justify-content: center;
    flex-direction: row;
    width: 40vw;
    height: 5vh;
    font-weight: bold;
    text-align: center;
  }
  & div.header p {
    height: auto;
    margin: 2vh 0;
  }
  & div.info p {
    height: auto;
    margin: 2vh 0;
  }

  & div.header p.delete {
    text-align: center;
    width: 100px;
  }

  & div.header p.title {
    width: 125px;
  }
  & div.header p.pay {
    width: 100px;
  }
  & div.info p.delete {
    width: 100px;
  }
  & div.info p.title {
    width: 125px;
  }
  & div.info p.pay {
    width: 100px;
  }
  & div.info button {
    text-decoration: none;
    border: none;
    background-color: #add8e6;
    border-radius: 20px;
    align-self: center;
    font-size: 13px;
  }
  & div.del {
    display: flex;
    width: 100px;
    justify-content: center;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    margin: 2vh 0;
    overflow: visible;
    font-size: 20px;

    & h1 {
      text-align: center;
    }
    & div.applist {
      height: auto;
    }
    & div.header {
      height: 10vh;
      width: 70vw;
    }

    & div.info p.pay {
      display: none;
    }
    & div.header p.pay {
      display: none;
    }
    & div.header p.delete {
    }
    & div.header p.title {
      text-align: start;
    }
    & div.header p.delete {
    }
    & div.info button {
      font-size: 20px;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: flex;
    font-size: 35px;
    width: 50vw;
    justify-content: space-between;

    & h1 {
      width: 150%;
      text-align: center;
    }
    & div.applist {
      width: 100%;
    }
    & div.header {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    & div.info {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    & div.header p.desc {
      display: none;
    }
    & div.info p.desc {
      display: none;
    }
    & div.header p.pay {
      display: none;
    }
    & div.info p.pay {
      display: none;
    }
    & div.header p.apply {
      text-align: end;
    }
    & div.info button {
      font-size: 35px;
    }
  }
`;
