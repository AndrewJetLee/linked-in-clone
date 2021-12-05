import styled from "styled-components";
import Header from "./Header";
import { Navigate } from "react-router";
import { Main } from "./Main";
import { Right } from "./Right";
import { Left } from "./Left";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { googleSignIn } from "../redux/authSlice";

function Home() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(googleSignIn(currentUser));
  });
  
  return (
    <>
      {!auth.currentUser && <Navigate to="/" />}

      <Header user={user} dispatch={dispatch} />
      <Container>
        <Section>
          <div>
            <h5>
              <a>Data Science Bootcamp </a>
            </h5>
            <p>
              - Join the big data revolution and gain a mastery in SQL and
              Python!
            </p>
          </div>
        </Section>
        <Layout>
          <Left user={user} dispatch={dispatch} />
          <Main user={user} dispatch={dispatch} />
          <Right />
        </Layout>
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  width: 70vw;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  margin: 0 auto;
  min-height: 100%;
`;

const Section = styled.div`
  height: auto;
  width: 100%;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 15px;

  h5,
  p {
    display: inline;
    font-weight: bold;
    text-decoration: underline;
    color: #434649;
    a {
      color: #0a66c2;
    }
  }
  @media (max-width: 990px) {
    visibility: hidden;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 5fr) minmax(500px, 12fr) minmax(
      300px,
      7fr
    );
  grid-template-rows: auto;
  margin: 25px 0;
  column-gap: 25px;
  grid-template-areas: "Left Main Right";
  @media (max-width: ${(props) => props.theme.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;
