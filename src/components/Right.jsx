import styled from "styled-components";
import { TopCard } from "./Left";

let newsObj = [
  {
    title: "",
    time: "",
    readers: "",
  },
];

export const Right = () => {
  return (
    <Container>
      <NewsCard>
        <News>
          <h3>LinkedIn News</h3>
          <ul>
            <li></li>
          </ul>
          <div></div>
        </News>
      </NewsCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: Right;
`;

const NewsCard = styled(TopCard)`
    
`;

const News = styled.div`
  display: flex;
  flex-direction: column;
`;
