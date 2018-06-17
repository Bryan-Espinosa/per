import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

class Navbar extends Component {
  render() {
    return (
      <ProfileForm>
        <h1>
          {this.props.userReducer.user && this.props.userReducer.user.lastname},{this
            .props.userReducer.user && this.props.userReducer.user.firstname}
        </h1>
        <h4>Contact me:</h4>
        <h3>
          {" "}
          {this.props.userReducer.user && this.props.userReducer.user.phone}
        </h3>
        <h3>
          {" "}
          {this.props.userReducer.user && this.props.userReducer.user.email}
        </h3>
        <h4>About me:</h4>
        <h3>
          {this.props.userReducer.user && this.props.userReducer.user.bio}
        </h3>
      </ProfileForm>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const ProfileForm = styled.div`
  display: flex
flex-direction: row
justify-content: space-between
align-items: center
& h1 {
    font-size: 1em;
  }
  & h3 {
    font-size: 1em;
  }
  & h4 {
    font-size: 0.8em;
  }
`;
export default connect(
  mapStateToProps,
  {}
)(Navbar);
