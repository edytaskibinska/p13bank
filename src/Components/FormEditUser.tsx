import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../StoreSrc/store";
import { useSetProfileMutation } from "../StoreSrc/apiHooks/useArgentBankAPI";

import { FormInputComponent } from ".";

import { changeValidHandler } from "../Helpers/inputValidator";

const FormEditUserStyled = styled.div`
  .errorMessage {
    color: red;
    margin: 5px 0px -5px 0px;
  }
  .errorMessages {
    color: red;
    margin: 5px 0px -5px 0px;
  }
  .editBtn {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .editBtnFlex {
    display: flex;
  }
  .formFieldContainer {
    .editBtnInput {
      display: flex;
      flex-direction: column;
      text-align: left;
    }
  }
  .editBtnInput {
    padding: 10px 0px 10px 20px;
    border-radius: 5px;
    border: none;
  }
  .editBtnInputRight {
    margin-right: 10px;
  }
  .editBtnInputLeft {
    margin-left: 10px;
  }
  .editSubmitBtn {
    color: #fff;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
  }
  .editSubmitBtnRight {
    margin-right: 10px;
    border-color: #00bc77;
    background-color: #00bc77;
  }
  .editSubmitBtnLeft {
    margin-left: 10px;
    border-color: red;
    background-color: red;
  }
  .editButtonError {
    margin-top: 10px;
    color: red;
  }
`;

const FormEditUser = (): JSX.Element => {
  const dispatch = useDispatch();
  const [editUser] = useSetProfileMutation();
  const [firstNameInp, setFirstNameInp] = useState<string>("");
  const [lastNameInp, setLastNameInp] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [validFirstName, setValidFirstName] = useState<boolean>(true);
  const [validLastName, setValidLastName] = useState<boolean>(true);
  const { email, id, createdAt, firstName, lastName } = useSelector(
    (state: RootState) => state.user
  );
  const changeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      changeValidHandler(e, true, "", setFirstNameInp, setValidFirstName);
    } else if (e.target.value.length === 0) {
      changeValidHandler(e, false, "", setFirstNameInp, setValidFirstName);
    }
  };
  const changeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      changeValidHandler(e, true, "", setLastNameInp, setValidLastName);
    } else if (e.target.value.length === 0) {
      changeValidHandler(e, false, "", setLastNameInp, setValidLastName);
    }
  };

  const submit = async () => {
    if (validFirstName && validLastName) {
      setShowError(false);
      const { data }: any = await editUser({
        firstName: firstNameInp,
        lastName: lastNameInp,
      });
      if (data && data.status === 200) {
        dispatch({
          type: "user/storeUser",
          payload: {
            id: id,
            email: email,
            firstName: firstNameInp,
            lastName: lastNameInp,
            createdAt: createdAt,
            updatedAt: data.body.updatedAt,
          },
        });
        dispatch({
          type: "editNameButton/toggle",
        });
      }
    } else {
      setShowError(true);
    }
  };
  useEffect(() => {
    setFirstNameInp(firstName);
    setLastNameInp(lastName);
  }, [firstName, lastName]);

  return (
    <FormEditUserStyled>
      <div className="editBtn">
        <div className="editBtnFlex">
          <div className="formFieldContainer">
            <FormInputComponent
              id="firstName"
              forId="firstName"
              label="Name"
              type="text"
              isCheckbox={false}
              className="editBtnInput editBtnInputRight"
              placeholder={firstName}
              value={firstNameInp}
              onChange={(e) => changeFirstName(e)}
            />
            <div className="errorMessage"></div>
          </div>
          <div className="formFieldContainer">
            <FormInputComponent
              id="lastName"
              forId="lastName"
              label="Last Name"
              type="text"
              isCheckbox={false}
              className="editBtnInput editBtnInputLeft"
              placeholder={lastName}
              value={lastNameInp}
              onChange={(e) => changeLastName(e)}
            />
            <div className="errorMessage"></div>
          </div>
        </div>
        <div className="editBtnFlex">
          <button
            className="editSubmitBtn editSubmitBtnRight"
            onClick={() => submit()}
          >
            Save
          </button>
          <button
            className="editSubmitBtn editSubmitBtnLeft"
            onClick={() => {
              dispatch({
                type: "editNameButton/toggle",
              });
            }}
          >
            Cancel
          </button>
        </div>
        {showError && (
          <div className="editButtonError">
            First name or last name should not be null
          </div>
        )}
      </div>
    </FormEditUserStyled>
  );
};

export default FormEditUser;
