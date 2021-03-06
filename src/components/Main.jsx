import styled from "styled-components";
import Post from "./Post";
import ArticleCard from "./ArticleCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getArticlesAPI } from "../redux/articleSlice";

export const Main = ({ user, dispatch }) => {
  const articles = useSelector((state) => state.article.articles);
  const loading = useSelector((state) => state.article.loading);

  useEffect(() => {
    dispatch(getArticlesAPI());
  }, []);

  return (
    <Container>
      <Post user={user} dispatch={dispatch} />
      {loading ? (
        <Loading>
          <img src="/images/loading.svg" alt="" />
        </Loading>
      ) : null}
      {articles.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  grid-area: Main;
  width: 100%; 
  @media (max-width: 1200px) {
    width: 65%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Loading = styled.div`
  text-align: center;
  img {
    width: 30px;
    text-align: center;
  }
`;
