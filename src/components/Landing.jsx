import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { googleSignIn } from "../redux/authSlice";

function Landing() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(googleSignIn(currentUser));
  });

  const handleSignIn = (e) => {
    navigate("/login");
  };

  return (
    <>
      {user && <Navigate to="/home" />}
      {/* {if loading, return the loading screen, otherwise, return the page} */}
      <Container>
        <Nav>
          <a href="/">
            <img src="./images/login-logo.svg" alt="" />
          </a>
          <Buttons>
            <Join onClick={() => {navigate("/signup")}}>Join Now</Join>
            <SignIn onClick={handleSignIn}>Sign In</SignIn>
          </Buttons>
        </Nav>
        <Section>
          <Hero>
            <HeroLeft>
              <h1>Welcome to your professional community</h1>
              <HeroButtons>
                <a href="">Search for a job<img src="/images/right-icon.svg"/></a>
                <a href="">Find a person you know<img src="/images/right-icon.svg"/></a>
                <a href="">Learn a new skill<img src="/images/right-icon.svg"/></a>
              </HeroButtons>
            </HeroLeft>
            <HeroRight>
              <img
                src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
                alt="Person on laptop while sitting down"
              />
            </HeroRight>
          </Hero>
        </Section>
      </Container>
    </>
  );
}

export default Landing;

const Container = styled.div`
  width: 100vw;
  height: 100vh; 
`;

const Nav = styled.nav`
  max-width: 67%;
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
  @media (max-width: 860px) {
    max-width: 100%;
    width: 100%; 
  }
`;
const Buttons = styled.div`
  font-weight: 600;
  @media (max-width: 860px) {
    margin-right: 20px; 
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
  transition-property: background-color, box-shadow;
  transition-duration: 0.167s;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    cursor: pointer;
    box-shadow: inset 0 0 0 2px #0a66c2;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  min-height: 500px;
  height: auto;
  width: 100vw;
  max-width: 60%;
  padding: 12px 0 16px 12px;
  margin-top: 80px;
  
  @media (max-width: 860px) {
    max-width: 100%;
    width: 100%;
  }
  
`;

const Hero = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 60%;
  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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
  width: 600px;
  padding-right: 42px;
  margin-left: 80px;
  h1 {
    color: rgba(143, 88, 73, 1);
    width: 100%;
    text-align: left; 
  }
  @media (max-width: 860px) {
    line-height: 1.2;
    margin-left: 0;
    width: 100%; 
    padding-left: 12px;
  }
`;

const HeroRight = styled.div`
  display: flex;
  height: auto; 
  justify-content: center;
  img {
    position: relative;
    width: 700px;
    height: auto;
    margin-left: 100px;
    @media (max-width: 1618px) {
      width: 50vw;
      margin: auto;
      position: static;
    }
    @media (max-width: 860px) {
      width: 300px;
      margin: auto;
      position: static;
      margin-right: 60px; 
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
    border: solid thin rgba(0, 0, 0, 0.09);
    border-radius: 8px;
    height: 60px;
    width: 400px;
    margin-bottom: 18px; 
    font-size: 18px; 
    img {
      margin-left: auto; 
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0px 4px 12px rgb(0 0 0 / 30%);
    }
    @media (max-width: 860px) {
      width: 100%;
    }
  }

  @media (max-width: 860px) {
    width: 100%;
  }
`;

