import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { WideWhiteCard } from "../Components";

import { RootState } from "../StoreSrc/store";
import { Logout, FormEditUser } from "../Components";
import { useGetProfileMutation } from "../StoreSrc/apiHooks/useArgentBankAPI";

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
    h1 {
      display: block;
      font-size: 2em;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
      padding: 20px;
    }
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
  const dispatch = useDispatch();
  const [getUserData] = useGetProfileMutation();
  const { firstName, lastName } = useSelector((state: RootState) => state.user);
  const { isLog } = useSelector((state: RootState) => state.auth);
  const { display } = useSelector((state: RootState) => state.editBtn);
  const [userLogggedOut, serLogggedOut] = useState(false);

  useEffect(() => {
    let cookieTokenSetter = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    let cookieIsLog = document.cookie.replace(
      /(?:(?:^|.*;\s*)isLog\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (
      !(
        cookieTokenSetter &&
        cookieIsLog &&
        cookieTokenSetter.length > 0 &&
        cookieIsLog.length > 0
      )
    ) {
      serLogggedOut(true);
    }
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const { data, error }: any = await getUserData({});
      if (data.body) {
        dispatch({
          type: "user/storeUser",
          payload: {
            id: data.body.id,
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName,
            createdAt: data.body.createdAt,
            updatedAt: data.body.updatedAt,
          },
        });
      }
    };
    if (isLog) fetch();
  }, [dispatch, getUserData, isLog]);

  return (
    <>
      {userLogggedOut === true && <Logout />}
      {(!isLog && <Logout />) ||
        (isLog && (
          <UserPageStyled className="userPage bg-dark">
            <div className="header">
              <h1>
                Welcome back
                <br />
                {firstName} {lastName}
              </h1>
              {!display && (
                <button
                  className="edit-button"
                  onClick={() => {
                    console.log("click");
                    dispatch({
                      type: "editNameButton/toggle",
                    });
                  }}
                >
                  Edit Name
                </button>
              )}
              {display && <FormEditUser />}
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
        ))}
    </>
  );
};

export default UserPage;
