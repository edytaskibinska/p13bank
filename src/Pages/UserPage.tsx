import { FC } from "react";
import styled from "styled-components";
import { WideWhiteCard } from "../Components";

const UserPageStyled = styled.div`
  .account {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
  }

  .account-amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .account-amount-description {
    margin: 0;
  }

  .account-title {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
  }

  .account-content-wrapper {
    width: 100%;
    flex: 1;
  }

  .edit-button {
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
  }

  .header {
    color: #fff;
    margin-bottom: 2rem;
  }

  .transaction-button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
  }

  @media (min-width: 720px) {
    .account {
      flex-direction: row;
    }

    .account-content-wrapper.cta {
      flex: 0;
    }

    .transaction-button {
      width: 200px;
    }
  }
`;

interface IUserPage {}

const UserPage: FC<IUserPage> = () => {
  return (
    <UserPageStyled className="userPage bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <WideWhiteCard
        accountTitle="Argent Bank Checking"
        accountTitleMultiply="8349"
        accountAmount="2,082.79"
        accountDescription="Available Balance"
        classNameWrapper="account-content-wrapper"
        classNameCta="account-content-wrapper cta"
      />

      <WideWhiteCard
        accountTitle="Argent Bank Savings"
        accountTitleMultiply="6712"
        accountAmount="10,928.42"
        accountDescription="Available Balance"
        classNameWrapper="account-content-wrapper"
        classNameCta="account-content-wrapper cta"
      />

      <WideWhiteCard
        accountTitle="Argent Bank Credit Card"
        accountTitleMultiply="8349"
        accountAmount="184.30"
        accountDescription="Current Balance"
        classNameWrapper="account-content-wrapper"
        classNameCta="account-content-wrapper cta"
      />
    </UserPageStyled>
  );
};

export default UserPage;
