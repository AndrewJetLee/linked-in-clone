import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <input type="text" placeholder="Search" />
          <img src="./images/search-icon.svg" alt="" />
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a href="" className="active">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
              <a href="">
                <img src="/images/nav-network.svg" alt="" />
                <span>Network</span>
              </a>
              <a href="">
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
              <a href="">
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
              <a href="">
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
              <User>
                <a href="">
                  <img src="/images/user.svg" alt="" />
                  <span>
                    Me <img src="/images/down-icon.svg" alt="" />
                  </span>
                </a>
                <SignOut>
                    <a href="">Sign Out</a>
                </SignOut>
              </User>
              <Work>
                <a href="">
                  <img src="/images/nav-work.svg" alt="" />
                  <span>
                    Work
                    <img src="images/down-icon.svg" alt="" />
                  </span>
                </a>
              </Work>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  background-color: white;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 3.3rem;
  z-index: 100;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70vw;
  min-height: 100%;
  min-width: 70vw; 
  max-width: 100%;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  position: relative;
  flex-grow: 1;
  input {
    width: 228px;
    max-width: 280px;
    border: none;
    background-color: #eef3f8;
    color: rgba(0, 0, 0, 0.9);
    border-radius: 2px;
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-weight: 500;
    height: 34px;
    border-color: #dce6f1;
    vertical-align: center;
  }
  img {
    width: 15px;
    position: absolute;
    left: 7px;
    top: 9px;
    background-color: #eef3f8;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.15s;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  list-style: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  width: 30vw;
  justify-content: space-around;
  a {
    display: flex;
    background: transparent;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    max-width: 80px;
    position: relative;
    text-decoration: none;
    padding: 0 10px;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      transition-property: color, opacity;
      transition-duration: 0.2s;
    }
    img {
      color: rgba(0, 0, 0, 0.6);
      opacity: 0.7;
      transition-property: color, opacity;
      transition-duration: 0.2s;
    }
    &:hover,
    &:active {
      img,
      span {
        color: rgba(0, 0, 0, 0.9);
        opacity: 1;
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px; 
  background: white;
  border-radius: 0 0 5px 5px; 
  width: 100px;
  height: 40px; 
  font-size: 16px; 
  text-align: center; 
  display: none; 
  transition-duration: .1s; 

`;


const User = styled(NavList)`
    &:hover {
        ${SignOut} {
            display: flex;
            align-items: center; 
            justify-content: center;
        }
    }
    a {

    img {
      width: 24px;
      border-radius: 50%;
      
    }
    span {
        display: flex;
        align-items: center; 
        justify-content: center;
        img {
            width: 12px; 
        }
    }
    
  }
`;

const Work = styled(User)`
    border-left: 1px solid rgba(0, 0, 0, 0.1)
`;

