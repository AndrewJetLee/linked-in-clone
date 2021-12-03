import styled from "styled-components";

const ArticleCard = ({ article }) => {
  return (
    <Container>
      <Card>
        <AuthorInfo>
          <img
            src={article.actor.image ? article.actor.image : "/images/user.svg"}
            alt=""
          />
          <div>
            <a>{article.actor.title}</a>
            <span>62,951 followers</span>
            <span>{article.date.toDate().toLocaleDateString()}</span>
          </div>

          <DotMenu>
            <img src="/images/three-dots.svg" alt="" />
          </DotMenu>
        </AuthorInfo>

        <ArticleInfo>
          <p>{article.description}</p>
          {article.sharedImg ? (
            <img src={article.sharedImg} alt="" />
          ) : (
            null
          )}
          <div>
            <h3>Quagmire</h3>
            <button>Learn More</button>
          </div>
        </ArticleInfo>

        <SocialReaction>
          <SocialCount>
            <button>
              <img
                src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                alt=""
              />
            </button>
          </SocialCount>

          <SocialResponse>
            <button>
              <img src="/images/like.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment.svg" alt="" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/share.svg" alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialResponse>
        </SocialReaction>
      </Card>
    </Container>
  );
};

export default ArticleCard;

const Container = styled.div`
  height: auto;
`;

const Card = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  border-radius: 5px;
  img {
    width: 100%;
    height: auto;
  }
`;
const AuthorInfo = styled.div`
  img {
    cursor: pointer;
  }
  display: flex;
  font-size: 12px;
  padding: 12px 10px 0 16px;
  justify-content: center;
  align-items: center;
  div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    span {
      color: rgba(0, 0, 0, 0.6);
    }
    a {
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      :hover {
        text-decoration: underline;
        color: rgb(10, 102, 194);
      }
    }
  }
  img {
    width: 48px;
    height: 48px;
  }
`;
const DotMenu = styled.a`
  margin-bottom: auto;
  display: flex;
  margin-left: auto;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  margin-top: -7px;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const ArticleInfo = styled.div`
  p {
    font-size: 14px;
    margin-bottom: 10px;
    padding: 12px 10px 0 16px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: -7px;
    background-color: rgba(238, 243, 248);
    height: 50px;
    padding: 0 12px;

    h3 {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
    }
    button {
      display: flex;
      font-size: 14px;
      align-items: center;
      border-radius: 16px;
      border: 1px solid;
      height: 32px;
      color: #0a66c2;
      font-weight: 600;
      padding: 6px 16px;
      :hover {
        background-color: rgba(112, 181, 249, 0.2);
        box-shadow: inset 0 0 0 1px #0a66c2;
      }
    }
  }
`;

const SocialReaction = styled.div`
  div {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const SocialCount = styled.div`
  padding-top: 4px;
`;

const SocialResponse = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 4px;
  padding-bottom: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    height: 29px;
    width: auto;
    padding: 24px 28px;
    border-radius: 5px;
    /* margin-left: -22px;  */
    img {
      width: 24px;
      height: 24px;
    }
    span {
      font-size: 14px;
    }
    :hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
