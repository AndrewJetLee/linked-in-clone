import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { getGoogleInfo } from '../redux/authSlice'
import { Navigate } from "react-router"
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth"
import { googleSignIn } from "../redux/authSlice"

function Landing() {
 
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const googleOnClick =  () => {
    dispatch(getGoogleInfo());
  }

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(googleSignIn(currentUser))
  })
 
  return (
    <Container>
      {
        auth.currentUser && 
        <Navigate to='/home'/>
      }
      <Nav>
        <a href="/">
          <img src="./images/login-logo.svg" alt="" />
        </a>
        <Buttons>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </Buttons>
      </Nav>
      <Section>
        <Hero>
          <HeroLeft>
            <h1>Welcome to your professional community</h1>
            <HeroButtons>
              <a href="">Search for a job</a>
              <a href="">Find a person you know</a>
              <a href="">Learn a new skill</a>
              <GoogleSignIn onClick={googleOnClick}>
                <img src="/images/google.svg" alt="" />
                Sign in with Google
              </GoogleSignIn>
            </HeroButtons>
          </HeroLeft>
          <HeroRight>
            <img src="images/login-hero.svg" alt="" />
          </HeroRight>
        </Hero>
      </Section>
    </Container>
  );
}

export default Landing;

const Container = styled.div``;

const Nav = styled.nav`
  max-width: 60%;
  min-width: 400px;
  margin: auto;
  padding: 12px 0 16px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    width: 133px;
    @media (max-width: 860px) {
      padding: 5px 14px;
      font-size: 0.95rem;
    }
  }
`;
const Buttons = styled.div`
  font-weight: 600;
`;

const GoogleSignIn = styled.button`
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

const Join = styled.a`
  padding: 8px 8px;
  color: #606060;
  font-weight: 500;
  border-radius: 4px;
  margin: 4px;
  min-width: 4rem;
  transition-property: background-color;
  transition-duration: 0.3s;
  &:hover {
    background-color: #e7e5e5;
    color: #181818;
    cursor: pointer;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  border-radius: 24px;
  padding: 10px 12px;
  color: #0a66c2;
  padding: 10px 24px;
  background-color: white;
  transition-property: background-color;
  transition-duration: 0.3s;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    cursor: pointer;
  }
`;

const Section = styled.div`
  display: flex;
  min-height: 500px;
  height: auto;
  width: 100vw;
  max-width: 60%;
  margin: auto;
  padding: 12px 0 16px 12px;
  align-items: center;
`;

const Hero = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 860px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    width: 60%;
    font-size: 3rem;
    color: #2977c9;
    font-weight: 300;
    padding-bottom: 30px;
    @media (max-width: 860px) {
      text-align: center;
      font-size: 1.7rem;
      width: 100%;
    }
  }
`;

const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 4rem;
  h1 {
    color: rgba(143, 88, 73, 1);
  }
  @media (max-width: 860px) {
    line-height: 1.2;
  }
`;

const HeroRight = styled.div`
  display: flex;

  img {
    position: absolute;
    width: 650px;
    right: 170px;
    top: 70px;
    @media (max-width: 1618px) {
      width: 50vw;
      margin: auto;
      position: static;
    }
    @media (max-width: 860px) {
      width: 300px;
      margin: auto;
      position: static;
    }
  }
`;

const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    padding: 12px 24px;
    border: solid thin lightgrey;
    border-radius: 4px;
    height: 55px;
    width: 400px;
    margin: 7px;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 5px 5px lightgray;
    }
  }
`;
