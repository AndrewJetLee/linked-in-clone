import { Separator } from "./Login";
import styled from "styled-components";

const Signup = () => {
  return (
    <Container>
      <Header>
        <div>
          <img src="/images/linkedin-login-logo.svg" alt="" />
        </div>
        <h1>Make the most of your professional life</h1>
      </Header>
      <SignUpCard>
        <SignUpForm>
          <label htmlFor="">Email</label>
          <EmailInput>
            <input type="text" />
          </EmailInput>
          <label htmlFor="">Password (6 or more characters)</label>
          <PasswordInput>
            <input type="text" />
          </PasswordInput>
          <div>
            <p>
              By clicking Agree and Join, you agree to the LinkedIn
              <a> User Agreement</a>, <a>Privacy Policy</a>, and <a>Cookie Policy</a>
              .
            </p>
          </div>
          <button>Agree and Join</button>
        </SignUpForm>
        <Separator>
          <hr />
          <span>or</span>
          <hr />
        </Separator>
        <Alternate>
          <span>
            Already on LinkedIn? <a href="/login">Sign in</a>
          </span>
        </Alternate>
      </SignUpCard>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: center;
  height: auto;
  div {
    padding: 20px;
    img {
      height: 34px;
    }
  }
  h1 {
    font-size: 29px;
    font-weight: 400;
  }
`;
const SignUpCard = styled.div`
  height: auto;
  padding: 24px;
  width: 400px;
  margin: 0 auto;
  margin-top: 25px; 
  background-color: #fff;
  border-radius: 8px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  
  font-size: 14px; 
  color: rgba(0, 0, 0, 0.6);
  label {
      padding-bottom: 4px; 
  }
  button {
    background-color: rgb(10, 102, 194);
    color: #fff;
    padding: 0 24px;
    height: 52px;
    border-radius: 30px;
    font-weight: 500; 
  }
  div {
      p {
          padding-top: 4px; 
          padding-bottom: 16px; 
          font-size: 12px; 
          text-align: center;
      }
      a {
          color: ${props => props.theme.colors.bluePrimary};
          :hover {
              text-decoration: underline;
              cursor: pointer;
          }
      }
  }
`;


const EmailInput = styled.div`
    border: 1px solid; 
    border-radius: 3px; 
    margin-bottom: 14px; 
    height: 30px; 
`

const PasswordInput = styled.div`
    border: 1px solid; 
    border-radius: 3px; 
    margin-bottom: 14px; 
    height: 30px; 
`

const Alternate = styled.div`
    text-align: center; 
    font-size: 15px; 
    padding: 12px 0 4px 0; 
    a {
        text-decoration: none;
        color: ${props => props.theme.colors.bluePrimary};
        font-weight: 500; 
        :hover {
            text-decoration: underline;
        }
    }
`;
