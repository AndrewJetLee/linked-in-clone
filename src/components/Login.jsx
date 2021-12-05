import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getGoogleInfo } from "../redux/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router";
import { auth } from "../firebase";
import { googleSignIn } from "../redux/authSlice";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(googleSignIn(currentUser));
  });

  const googleOnClick = () => {
    dispatch(getGoogleInfo());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("Logged in user: ", cred.user);
    })
    .catch((err) => {
      console.log(err.message);
    })

  }
 
  return (
    <Container>
      {user && <Navigate to="/home" />}
      <Header>
        <a href="/">
          <img src="/images/linkedin-login-logo.svg" alt="" />
        </a>
      </Header>
      <SignInCard>
        <ContentHeader>
          <h2>Sign In</h2>
          <span>Stay updated on your professional world</span>
        </ContentHeader>
        <ContentForm>
          <EmailInput>
            <input type="text" placeholder="Email" value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </EmailInput>
          <PasswordInput>
            <input type="text" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </PasswordInput>
          <a href="">Forgot password?</a>
          <button onClick={handleSubmit}>Sign In</button>
        </ContentForm>
        <AlternateSignIn>
          <Separator>
            <hr />
            <span>or</span>
            <hr />
          </Separator>
          <GoogleSignIn onClick={googleOnClick}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </GoogleSignIn>
        </AlternateSignIn>
      </SignInCard>
      <Register>
        <span>
          New to LinkedIn?<a href="/signup">Join now</a>
        </span>
      </Register>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  background-color: #fff;
`;

const Header = styled.div`
  img {
    margin-top: 32px;
    margin-left: 56px;
    height: 28px;
  }
`;

const SignInCard = styled.div`
  width: 352px;
  height: auto;
  margin: auto;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px;
  line-height: 1.2;
  border-radius: 8px;
`;

const ContentHeader = styled.div`
  h2 {
    font-size: 30px;
    font-weight: 600;
  }
  span {
    font-size: 14px;
  }
`;

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  a {
    text-decoration: none;
    padding: 15px 0;
    font-weight: 600;
    font-size: 16px;
  }
  button {
    background-color: rgb(10, 102, 194);
    color: #fff;
    padding: 0 24px;
    height: 52px;
    border-radius: 30px;
  }
`;

const EmailInput = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  width: 100%;
  padding: 28px 12px 6px;
  vertical-align: center;
  font-size: 18px;
  vertical-align: middle;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.9);
  line-height: 30px;
  margin-top: 24px;
  input {
    height: 30px; 
    margin-bottom: 18px; 
    ::placeholder {
      color: rgba(0, 0, 0, 0.5);
      
    }
  }
`;
const PasswordInput = styled(EmailInput)``;

const AlternateSignIn = styled.div``;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
  hr {
    border: none;
    width: 50%;
    height: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  span {
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    padding: 0 10px;
  }
`;

const GoogleSignIn = styled.button`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  border-radius: 28px;
  height: 56px;
  width: 300px;
  padding: 20px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const Register = styled.div`
  text-align: center;
  margin-top: 32px;
  font-size: 15px;
  a {
    font-weight: 600;
    margin-left: 6px;
    text-decoration: none; 
    color: ${props => props.theme.colors.bluePrimary};
    :hover {
      text-decoration: underline; 
    }
  }
`;
