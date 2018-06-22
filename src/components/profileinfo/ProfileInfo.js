import React, { Component } from "react";
import styled from "styled-components";
import { updateProfile, getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import Navbar from "../navbar/Navbar";

class ProfileInfo extends Component {
  state = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    bio: "",
    editing: false,
    jobs: []
  };

  handleinput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props);

    return (
      <ProfDisplay>
        <Navbar />
        <div className="fieldbox">
          {this.props.userReducer.user &&
          this.props.userReducer.user.firstname &&
          !this.state.editing ? (
            <h1>
              {this.props.userReducer.user.lastname}
              {"  ,  "}
              {this.props.userReducer.user.firstname}
            </h1>
          ) : (
            <div className="NameField">
              <p>First Name:</p>
              <input
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleinput}
              />
            </div>
          )}

          {this.props.userReducer.user &&
          this.props.userReducer.user.lastname &&
          !this.state.editing ? null : (
            <div className="NameField">
              <p>Last Name:</p>
              <input
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleinput}
              />
            </div>
          )}
          {this.props.userReducer.user &&
          this.props.userReducer.user.phone &&
          !this.state.editing ? (
            <h2>{this.props.userReducer.user.phone}</h2>
          ) : (
            <div className="phonefield">
              <p>phone:</p>
              <input
                name="phone"
                value={this.state.phone}
                onChange={this.handleinput}
              />
            </div>
          )}

          {this.props.userReducer.user &&
          this.props.userReducer.user.email &&
          !this.state.editing ? (
            <h3>{this.props.userReducer.user.email}</h3>
          ) : (
            <div className="EmailField">
              <p>email:</p>
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleinput}
              />
            </div>
          )}
          {this.props.userReducer.user &&
          this.props.userReducer.user.bio &&
          !this.state.editing ? (
            <h4>{this.props.userReducer.user.bio}</h4>
          ) : (
            <div className="BioField">
              <p>Bio:</p>
              <input
                name="bio"
                value={this.state.bio}
                onChange={this.handleinput}
              />
            </div>
          )}
        </div>
        <div className="ButtonBox">
          {!this.state.editing ? null : (
            <p>
              <button
                onClick={() =>
                  this.props
                    .updateProfile(
                      this.state.firstname ||
                        this.props.userReducer.user.firstname,
                      this.state.lastname ||
                        this.props.userReducer.user.lastname,
                      this.state.phone || this.props.userReducer.user.phone,
                      this.state.email || this.props.userReducer.user.email,
                      this.state.bio || this.props.userReducer.user.bio
                    )
                    .then(() => this.props.getUser())
                    .then(() => this.setState({ editing: false }))
                }
              >
                Submit
              </button>
            </p>
          )}
          <p>
            <button
              onClick={() => this.setState({ editing: !this.state.editing })}
            >
              Edit
            </button>
          </p>
          <a href={"/profilepage"}>
            <p>
              <button>Profile</button>
            </p>
          </a>
        </div>
      </ProfDisplay>
    );
  }
}
const mapStateToProps = state => {
  return { ...state };
};
export default connect(
  mapStateToProps,
  { updateProfile, getUser }
)(ProfileInfo);

const ProfDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8bfbf9;
  height: 100vh;

  & div.fieldbox h1 {
    display: none;
  }
  & div.fieldbox h2 {
    display: none;
  }
  & div.fieldbox h3 {
    display: none;
  }
  & div.fieldbox h4 {
    justify-content: center;
    flex-wrap: auto;
    text-align: center;
    font-size: 1em;
    width: 60vw;
  }

  & div.ButtonBox {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50vw;
    height: 25vh;
  }
  & div.ButtonBox button {
    font-size: 1.5em;
    background-color: #add8e6;
    border-radius: 20px;
    border: none;
    box-shadow: 0 6px 8px 0 black;
  }

  & div.fieldbox input {
    width: 20vw;
    height: 3vh;
  }
  & div.NameField p {
    font-size: 2em;
  }
  & div.phonefield p {
    font-size: 2em;
  }

  & div.EmailField p {
    font-size: 2em;
  }
  & div.BioField p {
    font-size: 2em;
  }

  @media only screen and (min-device-width: 319px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;

    height: 100vh;
    align-items: center;

    & div.fieldbox {
      display: flex;
      flex-direction: column;
    }

    & div.fieldbox h1 {
      display: block;
      font-size: 2.5em;
      justify-content: center;
    }
    & div.fieldbox h2 {
      display: none;
    }

    & div.fieldbox h3 {
      display: block;
      font-size: 1.5em;
      text-align: center;
      justify-content: center;
    }
    & div.fieldbox h4 {
      font-size: 1em;
      align-self: center;
      text-align: center;
      justify-content: center;
    }
    & div.ButtonBox {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-evenly;
      width: 50vw;
      height: 30vh;
    }
    & div.ButtonBox button {
      font-size: 1.5em;
      background-color: #add8e6;
      border-radius: 20px;
      border: none;
      box-shadow: 0 6px 8px 0 black;
    }
    & div.fieldbox input {
      width: 50vw;
      height: 3vh;
    }
  }
  @media only screen and (min-device-width: 481px) and (max-device-width: 767px) {
    display: flex;

    & div.fieldbox input {
      width: 50vw;
      height: 3vh;
    }
    & div.fieldbox h1 {
      text-align: center;
      justify-content: center;
      display: block;
      font-size: 3rem;
    }
    & div.fieldbox h2 {
      text-align: center;
      justify-content: center;
      display: block;
      font-size: 2.5em;
    }
    & div.fieldbox h3 {
      text-align: center;
      justify-content: center;
      display: block;
      font-size: 2.5em;
    }
    & div.fieldbox h4 {
      text-align: center;
      justify-content: center;
      font-size: 1.5em;
    }
    & div.fieldbox {
      display: flex;
      flex-direction: column;
    }
    & div.ButtonBox {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-evenly;
      width: 20vw;
      height: 26vh;
    }
    & div.ButtonBox button {
      font-size: 1.5em;
      background-color: #add8e6;
      border-radius: 20px;
      border: none;
      box-shadow: 0 6px 8px 0 black;
    }
    & div.NameField p {
      font-size: 3em;
    }
    & div.phonefield p {
      font-size: 3em;
    }

    & div.EmailField p {
      font-size: 3em;
    }
    & div.BioField p {
      font-size: 3em;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    display: flex;

    flex-direction: column;
    align-content: center;

    & div.fieldbox input {
      width: 50vw;
      height: 3vh;
    }
    & div.NameField p {
      font-size: 3em;
    }
    & div.phonefield p {
      font-size: 3em;
    }

    & div.EmailField p {
      font-size: 3em;
    }
    & div.BioField p {
      font-size: 3em;
    }
    & div.fieldbox h1 {
      text-align: center;
      justify-content: center;
      display: block;
      font-size: 3rem;
    }
    & div.fieldbox h2 {
      text-align: center;
      justify-content: center;
      display: block;
      font-size: 2.5em;
    }
    & div.fieldbox h3 {
      text-align: center;
      justify-content: center;
      display: block;
      font-size: 2.5em;
    }
    & div.fieldbox h4 {
      text-align: center;
      justify-content: center;
      font-size: 1.5em;
    }
    & div.fieldbox {
      display: flex;
      flex-direction: column;
    }
    & div.ButtonBox {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: space-evenly;
      width: 20vw;
      height: 26vh;
    }
    & div.ButtonBox button {
      font-size: 40px;
    }
  }
`;
