import { FC } from "react";
import styled from "styled-components";
import { WhiteCard, FormSignIn } from "../Components";

const SignInPageStyled = styled.div`
  min-height: calc(100vh - 140px);
  padding-top: 80px;
  .sign-in-content {
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
  }
  .sign-in-icon {
    font-size: 5rem;
  }
`;

interface ISignInPage {}

const SignInPage: FC<ISignInPage> = () => {
  return (
    <SignInPageStyled className="SignInPage bg-dark">
      <WhiteCard className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <FormSignIn />
      </WhiteCard>
    </SignInPageStyled>
  );
};

export default SignInPage;
