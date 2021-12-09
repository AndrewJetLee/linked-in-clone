import styled from "styled-components";

export const Left = ({ user, dispatch }) => {
  return (
    <Container>
      <TopCard>
        <UserInfo>
          <CardBackground />
          <a>
            {user && user.photoURL ? (
              <Photo src={user.photoURL} alt="" />
            ) : (
              <PhotoDefault/>
            )}
            <Link>{user ? user.displayName : "Hello there!"}</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              Connection <span>1</span>
              
            </div>

            <div>Grow your network</div>

            <div>
              Invitation <span>1</span>
            </div>
          </a>
        </Widget>
        <Items>
          <img src="/images/item-icon.svg" alt="" />
          <a>My items</a>
        </Items>
      </TopCard>
      <BottomCard>
        <SocialLinks>
          <a>Groups</a>
          <div>
            <a>Events</a>
            <img src="/images/plus-icon.svg" alt="" />
          </div>
          <a>Followed Hashtags</a>
        </SocialLinks>
        <Discover>
          <a>Discover more</a>
        </Discover>
      </BottomCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: Left;
`;

export const TopCard = styled.div`
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const UserInfo = styled.div`
  display: flex;
  overflow-wrap: break-word;
  flex-direction: column;
  padding: 12px 12px 16px;
  a {
    :hover {
      cursor: pointer;
      text-decoration: underline;
      color: #0a66c2;
    }
  }
`;

const CardBackground = styled.div`
  background-image: url("/images/card-bg.svg");
  background-position: center;
  background-size: cover;
  height: 56px;
  margin: -12px -12px 0;
`;

const Photo = styled.img`
  box-shadow: none;
  background-color: white;
  background-size: 60%;
  background-clip: content-box;
  height: 72px;
  width: 72px;
  border-radius: 50%;
  border: 2px solid white;
  margin: -38px auto 12px;
`;

const PhotoDefault = styled.div`
  box-shadow: none;
  background-image:  url("images/photo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-color: white;
  background-size: 60%;
  background-clip: content-box;
  height: 68px;
  width: 68px;
  border-radius: 50%;
  border: 2px solid white;
  margin: -38px auto 12px;
`

const Link = styled.div`
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 500;
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
`;

const Widget = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.08);
  
  font-size: 12px;
  font-weight: 600;
  a {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0;
    div {
      padding: 4px 10px;
      color: rgba(0, 0, 0, 0.65);
      display: flex;
      justify-content: space-between;
      width: 100%;
      
      span {
        color: #0a66c2;
      }
    }
    div:first-child {
      cursor: pointer; 
      :hover {
        background-color: rgba(0, 0, 0, 0.09);
      }
    }
    div:nth-child(2) {
      margin-top: -7px;
      color: black;
    }
    div:nth-child(3) {
      cursor: pointer; 
      margin-top: 8px;
      :hover {
        background-color: rgba(0, 0, 0, 0.09);
      }
    }
    
  }
`;
const Items = styled.div`
  padding: 12px 10px;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  border-top: solid 1px rgba(0, 0, 0, 0.08);
  img {
    opacity: 0.65;
  }
  a {
    padding-left: 5px;
  }
  transition-property: background-color, border-top;
  transition-duration: 0.167s; 
  cursor: pointer; 
  :hover {
    background-color: rgba(0, 0, 0, 0.08);
    border-top: 1px solid rgba(0, 0, 0, 0.09);
  }
`;

const BottomCard = styled(TopCard)`
  margin-top: 8px;
`;
const SocialLinks = styled(UserInfo)`
  font-size: 12px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  color: #0a66c2;

  a {
    padding: 5px 0;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
    img {
      opacity: 0.65;
    }
  }
`;

const Discover = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.08);
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
  padding: 12px;
  transition-property: background-color border-top;
  transition-duration: 0.167s;
  :hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.09);
    border-top: 1px solid rgba(0, 0, 0, 0.09);
  }
`;
