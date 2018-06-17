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
      <ProfileForm>
        <Navbar />
        {this.props.userReducer.user &&
        this.props.userReducer.user.firstname &&
        !this.state.editing ? (
          <p>
            {this.props.userReducer.user.firstname}
            {""}
            {this.props.userReducer.user.lastname}
          </p>
        ) : (
          <div>
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
          <div>
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
          <p>{this.props.userReducer.user.phone}</p>
        ) : (
          <div>
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
          <p>{this.props.userReducer.user.email}</p>
        ) : (
          <div>
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
          <p>{this.props.userReducer.user.bio}</p>
        ) : (
          <div>
            <p>Bio:</p>
            <input
              name="bio"
              value={this.state.bio}
              onChange={this.handleinput}
            />
          </div>
        )}
        <div>
          {!this.state.editing ? null : (
            <button
              onClick={() =>
                this.props
                  .updateProfile(
                    this.state.firstname ||
                      this.props.userReducer.user.firstname,
                    this.state.lastname || this.props.userReducer.user.lastname,
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
          )}

          <button
            onClick={() => this.setState({ editing: !this.state.editing })}
          >
            Edit
          </button>
          <a href={process.env.REACT_APP_LOGOUT}>
            <button> Logout </button>
          </a>
          <a href={"/profilepage"}>
            <button>Profile</button>
          </a>
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
  { updateProfile, getUser }
)(ProfileInfo);
const ProfileForm = styled.div`
  display: flex,
flex-direction: column,
align-items: center,

& input {
    width: 60vw;
  }
  & button {
    display: block;
    align-self: center;
    margin: 0 auto;
    margin-top: 5vh;
  }
`;
