import React from "react";
import styled from "styled-components";

function Login(props) {
  return (
    <ProfileForm>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
        alt="null"
      />
      <a href={process.env.REACT_APP_LOGIN}>
        <button> Login </button>
      </a>
    </ProfileForm>
  );
}
export default Login;
const ProfileForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh
  justify-content: space-between

& img {

  height: 50vh
  width: 50vw
}
  & button {
    display: block
    margin-top: 20px
    align-self: center}`;
