import styled from "styled-components";

function SignIn() {
  return (
    <div>
      <Form>
        <Google>
          <img src="/images/google.svg" alt="" />
          Sign in with Google
        </Google>
      </Form>
    </div>
  );
}

export default SignIn;

const Form = styled.form``;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  border-radius: 28px;
  height: 56px;
  width: 300px;
  padding: 20px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0%);
  vertical-align: middle;
  font-size: 1.3rem;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
