import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import logo from "../../logo.png";

class Navbar extends Component {
  render() {
    return (
      <NavInfo>
        <div className="spacer" />
        <img src={logo} alt="null" />
        <div className="info">
          <p>
            {this.props.userReducer.user &&
              this.props.userReducer.user.lastname}
            {this.props.userReducer.user && ","}
            {this.props.userReducer.user &&
              this.props.userReducer.user.firstname}
          </p>
          <div className="hidden">
            <p>Contact me:</p>
            <p>
              {this.props.userReducer.user && this.props.userReducer.user.phone}
            </p>
            <p>
              {this.props.userReducer.user && this.props.userReducer.user.email}
            </p>
          </div>
          <a href={process.env.REACT_APP_LOGOUT}>
            <button>Logout </button>
          </a>
        </div>
      </NavInfo>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};
export default connect(
  mapStateToProps,
  {}
)(Navbar);

const NavInfo = styled.div`
  display: flex;
  background-color: #add8e6;
  flex-direction: row;
  height: 30vh;
  width: 100%;
  justify-content: space-between;
  & a {
    text-decoration: none;
    & button {
      text-decoration: none;
      border: none;
      background-color: #8bfbf9;
      border-radius: 20px;
      display: block;
      align-self: center;
      font-size: 31px;
      box-shadow: 0 6px 8px 0 black;
      :hover {
        box-shadow: none;
      }
      :active {
        box-shadow: none;
      }
    }
  }

  & div.spacer {
    height: 30vh;
    width: 20vw;
  }
  & img {
    display: block;
    height: auto;
    width: 30vw;
  }
  & div.info p {
    justify-content: flex-end;
    display: flex;
    font-size: 1em;
    width: 20vw;
    justify-content: end;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    height: 20vh;
    flex-direction: row;
    justify-content: space-between;
    background-color: #add8e6;
    width: 100%;

    & img {
      display: flex;
      max-width: 30vw;
      height: auto;
    }
    & div.info p {
      display: none;
    }
    & div.hidden p {
      display: none;
    }
    & a {
      text-decoration: none;
      & button {
        text-decoration: none;
        border: none;
        background-color: #8bfbf9;
        border-radius: 20px;
        display: flex;
        align-self: flex-end;
        font-size: 20px;
        box-shadow: 0 12px 16px 0 black;
      }
    }
    & div.spacer {
      height: 20vh;
      width: 14vw;
    }
  }

  @media only screen and (min-device-width: 481px) and (max-device-width: 767px) {
    display: flex;
    justify-content: space-between;
    height: 20vh;
    width: 100%;

    & div.info p {
      display: none;
    }

    & div.hidden p {
      display: none;
    }
    & div.spacer {
      height: 20vh;
      width: 15vw;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: flex;
    height: 35vh;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #add8e6;

    & img {
      display: flex;
      max-width: 30vw;
      height: auto;
    }

    & div.info {
      height: 35vh;
    }
    & div.info p {
      display: none;
    }
    & div.hidden p {
      display: none;
    }
    & div.spacer {
      height: 20vh;
      width: 14vw;
    }
    & a {
      text-decoration: none;
      & button {
        text-decoration: none;
        font-size: 40px;
        border: none;
        background-color: #8bfbf9;
        border-radius: 20px;
        align-self: center;
        box-shadow: 0 12px 16px 0 black;
        right: 0;
      }
    }
  }
`;
