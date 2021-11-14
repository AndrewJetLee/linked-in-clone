import styled from "styled-components";
import Header from "./Header";
import { Main } from "./Main";
import { Right } from "./Right";
import { Left } from "./Left";

function Home() {
  return (
    <>
      <Header />
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
          <Left/>
          <Main/>
          <Right/>
        </Layout>
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  margin: 0 auto;
  min-height: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
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
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  grid-template-rows: auto;
  margin: 25px 0;
  column-gap: 25px; 
  grid-template-areas: 
  "Left Main Right";
  @media (max-width: ${(props) => props.theme.mobile}) {
    grid-template-columns: minmax(0, auto);
  }
`;
