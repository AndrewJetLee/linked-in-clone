import styled from "styled-components";
import Post from "./Post";
import ArticleCard from "./ArticleCard";
import { useSelector } from "react-redux";

export const Main = ({ user, dispatch }) => {
  const loading = useSelector((state) => state.article.loading);
  return (
    <Container>
      <Post user={user} dispatch={dispatch} />
      {loading ? (
        <Loading><img src="/images/loading.svg" alt="" /></Loading>
      ) : null}
      <ArticleCard />
    </Container>
  );
};

const Container = styled.div`
  grid-area: Main;
`;

const Loading = styled.div`
  text-align: center;
  img {
    width: 30px;
    text-align: center;
  }
`;
