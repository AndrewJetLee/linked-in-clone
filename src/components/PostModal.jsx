import styled from "styled-components";
import { useState } from "react";

const PostModal = () => {
  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button>
            <img src="/images/close-icon.svg" alt="" />
          </button>
        </Header>
        <PostContent>
          <UserInfo>
            <div>
              <img src="/images/user.svg" alt="" />
            </div>
            <div>
              <span>Andrew Lee</span>
              <button>
                <img src="/images/globe.svg" alt="" />
                <span>Anyone</span>
                <img src="/images/down-icon.svg" alt="" />
              </button>
            </div>
          </UserInfo>
          <PostInput>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="What do you want to talk about?"
            ></textarea>
          </PostInput>
          <ShareBottom>
            <div>
              <button href="">Add Hashtag</button>
            </div>
            <div>
              <ShareIcons>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    fill="rgba(0, 0, 0, 0.6)"
                    d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  class="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path
                    fill="rgba(0, 0, 0, 0.6)"
                    d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"
                  ></path>
                </svg>
              </ShareIcons>
              <PostButtons>
                <button>
                  <img src="/images/comment.svg" alt="" />
                  Anyone
                </button>
                <button>Post</button>
              </PostButtons>
            </div>
          </ShareBottom>
        </PostContent>
      </Content>
    </Container>
  );
};

export default PostModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.8);
`;
const Content = styled.div`
  width: 552px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  max-height: 90%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 32px;
  @media screen and (max-height: 600px) {
    top: 0;
    height: 100vh;
    max-height: none;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    :hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 12px 4px 12px;
  @media screen and (max-height: 600px) {
      height: 100%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  div:first-child {
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
  div:last-child {
    font-size: 15px;
    padding-left: 4px;
    margin-left: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1.5;
    font-weight: 600;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(0, 0, 0, 0.6);
      border-radius: 20px;
      padding: 3px 10px;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 6px; 
      span {
        padding: 0 4px;
        font-size: 14px;
      }
      img:last-child {
        position: relative;
        top: 1px;
        width: 14px;
      }
    }
  }
`;

const PostInput = styled.div`
  height: 100%;
  margin: 12px 24px;
  textarea {
    width: 100%;
    height: 96px;
    font-size: 15px;
    
  }
`;

const ShareBottom = styled.div`
  display: flex;
  flex-direction: column;
  div:first-child {
    margin-bottom: 14px;
    button {
      margin-left: 4px;
      border-radius: 4px;
      color: rgb(6, 88, 169);
      font-weight: 600;
      font-size: 15px;
      padding: 6px 8px;
      transition-property: background-color;
      transition-duration: 0.167s;
      :hover {
        background-color: rgba(112, 181, 249, 0.2);
      }
    }
  }
  div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ShareIcons = styled.div`
  display: flex;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2px 0;
  svg:first-child {
    margin-left: 12px;
  }
  svg:last-child {
    margin-left: 17px;
    margin-right: 20px;
  }
`;

const PostButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  top: -7px;
  color: rgba(0, 0, 0, 0.6);
  button {
    padding: 6px 12px;
    border-radius: 20px;
    transition-property: background-color, color;
    transition-duration: 0.167s;
    :hover {
      background-color: rgba(0, 0, 0, 0.08);
      color: rgba(0, 0, 0, 0.7);
    }
  }
  button:first-child {
    display: flex;
    align-items: center;
    margin-left: 10px;
    img {
      margin-right: 2px;
      height: 18px;
      width: 18px;
    }
  }
  button:last-child {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
