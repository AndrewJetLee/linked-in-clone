import { Separator } from "./Login";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { googleSignIn } from "../redux/authSlice";
import { GoogleSignIn } from "./Login";
import { getGoogleInfo } from "../redux/authSlice";

const Signup = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user created: ", cred.user);
        signInWithEmailAndPassword(auth, email, password).then((cred) => {
          console.log("user logged in: ", cred.user);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const googleOnClick = () => {
    dispatch(getGoogleInfo());
  };

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(googleSignIn(currentUser));
  });

  return (
    <Container>
      {auth.currentUser && <Navigate to="/home" />}
      <Header>
        <div>
          <img src="/images/linkedin-login-logo.svg" alt="" />
        </div>
        <h1>Make the most of your professional life</h1>
      </Header>
      <SignUpCard>
        <SignUpForm>
          <label htmlFor="">Email</label>
          <EmailInput>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </EmailInput>
          <label htmlFor="">Password (6 or more characters)</label>
          <PasswordInput>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </PasswordInput>
          <div>
            <p>
              By clicking Agree and Join, you agree to the LinkedIn
              <a> User Agreement</a>, <a>Privacy Policy</a>, and{" "}
              <a>Cookie Policy</a>.
            </p>
          </div>
          <button onClick={handleSubmit}>Agree & Join</button>
        </SignUpForm>
        <Separator>
          <hr />
          <span>or</span>
          <hr />
        </Separator>
        <GoogleSignIn onClick={googleOnClick}>
          <img src="/images/google.svg" alt="" />
          Sign in with Google
        </GoogleSignIn>
        <Alternate>
          <span>
            Already on LinkedIn? <a href="/login">Sign in</a>
          </span>
        </Alternate>
      </SignUpCard>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: center;
  height: auto;
  div {
    padding: 20px;
    img {
      height: 34px;
    }
  }
  h1 {
    font-size: 29px;
    font-weight: 400;
  }
`;
const SignUpCard = styled.div`
  height: auto;
  padding: 24px;
  width: 400px;
  margin: 0 auto;
  margin-top: 90px;
  background-color: #fff;
  border-radius: 8px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;

  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  label {
    padding-bottom: 4px;
  }
  button {
    background-color: rgb(10, 102, 194);
    color: #fff;
    padding: 0 24px;
    height: 52px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 15px;
    transition-property: background-color;
    transition-duration: 0.167s;
    :hover {
      background-color: rgb(0, 65, 130);
    }
  }
  div {
    p {
      padding-top: 4px;
      padding-bottom: 16px;
      font-size: 12px;
      text-align: center;
    }
    a {
      color: ${(props) => props.theme.colors.bluePrimary};
      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

const EmailInput = styled.div`
  border: 1px solid;
  border-radius: 3px;
  margin-bottom: 14px;
  height: 35px;
  display: flex;
  align-items: center;
  input {
    padding: 0 10px;
    height: 55px;
    font-size: 16px;
  }
`;

const PasswordInput = styled(EmailInput)``;

const Alternate = styled.div`
  text-align: center;
  font-size: 15px;
  padding: 12px 0 4px 0;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.bluePrimary};
    font-weight: 500;
    :hover {
      text-decoration: underline;
    }
  }
`;
