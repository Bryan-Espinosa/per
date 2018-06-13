import React, { Component } from "react";
import styled from "styled-components";
import { updateProfile, getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import ProfilePage from "../profilePage/ProfilePage";

class ProfileInfo extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    bio: "",
    editing: false
  };
  handleinput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEdit = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.props);

    return (
      <ProfileForm>
        {this.props.userReducer.user &&
        this.props.userReducer.user.firstname ? (
          <p>{this.props.userReducer.user.firstname}</p>
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

        {this.props.userReducer.user && this.props.userReducer.user.lastname ? (
          <p>{this.props.userReducer.user.lastname}</p>
        ) : (
          <div>
            <p>Last Name:</p>
            <input
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleinput}
            />
          </div>
        )}
        {this.props.userReducer.user && this.props.userReducer.user.email ? (
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

        {this.props.userReducer.user && this.props.userReducer.user.bio ? (
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
          <button
            onClick={() =>
              this.props
                .updateProfile(
                  this.state.firstname || this.props.userReducer.user.firstname,
                  this.state.lastname || this.props.userReducer.user.lastname,
                  this.state.email || this.props.userReducer.user.email,
                  this.state.bio || this.props.userReducer.user.bio
                )
                .then(() => this.props.getUser())
            }
          >
            Submit
          </button>

          <button onClick={this.handleEdit}>Edit</button>
          <a href={process.env.REACT_APP_LOGOUT}>
            <button> Logout </button>
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
