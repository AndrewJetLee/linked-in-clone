import styled from "styled-components";
import { TopCard } from "./Left";

let newsObj = [
  {
    title: "Deere, union make new tentative pact",
    time: "2h ago",
    readers: "2,634 readers",
  },
  {
    title: "Firehouse Subs acquired in $1B deal",
    time: "2h ago",
    readers: "47,277 readers",
  },
  {
    title: "Calls after work? That's illegal.",
    time: "2h ago",
    readers: "66,769 readers",
  },
  {
    title: "Kal Penn on unique career paths",
    time: "10m ago",
    readers: "6,938 readers",
  },
  {
    title: "Millenial managers feel the burnout",
    time: "2h ago",
    readers: "40,250 readers",
  },
];

export const Right = () => {
  return (
    <Container>
      <NewsCard>
        <News>
          <h2><span>LinkedIn News</span><img src="/images/feed-icon.svg" alt=""></img></h2>
          <ul>
            {newsObj.map((newsItem) => (
              <NewsItem>
                <h3>{newsItem.title}</h3>
                <div>
                  <span>{newsItem.time}</span>
                  <span>{newsItem.readers}</span>
                </div>
              </NewsItem>
            ))}
          </ul>
          <div></div>
        </News>
        <ShowMore>
            Show more<img src="/images/down-arrow.svg" alt="" />
        </ShowMore>
      </NewsCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: Right; 
  @media (max-width: 1200px) {
    display: none; 
  }
`;

const NewsCard = styled(TopCard)``;

const News = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  color: rgba(0, 0, 0, 0.75);
  h2 {
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      width: 100%; 
      padding: 10px 15px 3px; 
  }
`;

const NewsItem = styled.li`
  list-style-type: circle;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 13.5px;
  flex-wrap: wrap;
  padding: 5px 14px; 
  
  h3 {
    
    &:before {
      content: "• ";
    }
  }
  div {
    display: flex;
    font-size: 12px;
    justify-content: flex-start;
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    span:first-child {
      padding: 1px 3px;
      margin-left: 8px;
    }
    span:nth-child(2) {
      &:before {
        content: "• ";
      }
    }
  }
`;

const ShowMore = styled.div`
    color: rgba(0, 0, 0, 0.75);
    padding: 7px 25px 20px; 
    text-align: left;
    font-size: 14px; 
    font-weight: 600;
    position: relative; 
    img {
        height: 13px;
        width: 20px; 
        position: absolute; 
        top: 11px; 
        margin-left: 2px; 
    }
`