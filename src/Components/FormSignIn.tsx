import { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLoginUserMutation } from "../StoreSrc/apiHooks/useArgentBankAPI";
import styled from "styled-components";
import { FormInputComponent } from "../Components";
//helpers

import { validator } from "../Helpers/inputValidator";

const FormSignInStyled = styled.div`
  background-color: white;
  .input-wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 1rem;
    label {
      font-weight: bold;
    }
    input {
      padding: 5px;
      font-size: 1.2rem;
    }
  }
  .sign-in-button {
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
  .input-remember {
    display: flex;
  }
  .input-remember label {
    margin-left: 0.25rem;
  }
  .errorMsg {
    color: red;
    font-size: 10px;
  }
`;

interface IFormSignIn {}

const FormSignIn: FC<IFormSignIn> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginUser] = useLoginUserMutation();

  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [rememberInput, setRememberInput] = useState<boolean>(false);
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<boolean>(false);

  const refEmailErrorMsg = useRef(null);
  const refPasswordError = useRef(null);
  const refPasswordError2 = useRef(null);

  const errorMessageContent = (
    e: React.ChangeEvent<HTMLInputElement>,
    errMessage: string
  ) => {
    let errorDiv = e.target.nextSibling as HTMLElement;
    errorDiv.textContent = errMessage;
  };

  const emailValidator = (e: React.ChangeEvent<HTMLInputElement>) => {
    const mailregex = /^([\w.-]+)@([\w-]+)((\.(\w){2,})+)$/;
    if (mailregex.test(e.target.value)) {
      validator(e, true, "", setEmailInput, setValidEmail, errorMessageContent);
    } else if (e.target.value.length === 0) {
      validator(
        e,
        false,
        "",
        setEmailInput,
        setValidEmail,
        errorMessageContent
      );
    } else {
      validator(
        e,
        false,
        "The email format is not valid",
        setEmailInput,
        setValidEmail,
        errorMessageContent
      );
    }
  };

  const passwordValidator = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    if (regex.test(e.target.value)) {
      validator(
        e,
        true,
        "",
        setPasswordInput,
        setValidPassword,
        errorMessageContent
      );
    } else if (e.target.value.length === 0) {
      validator(
        e,
        false,
        "",
        setPasswordInput,
        setValidPassword,
        errorMessageContent
      );
    } else {
      validator(
        e,
        false,
        "Password requirements : A lower case letter, a number and 8 characters minimum",
        setPasswordInput,
        setValidPassword,
        errorMessageContent
      );
    }
  };

  const changeCheckboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberInput(e.target.checked);
  };

  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validEmail && validPassword) {
      const { data, error }: any = await loginUser({
        email: emailInput,
        password: passwordInput,
      });
      console.log("data", data);
      if (data && data.status === 200) {
        //store dispatch action (in slices)
        dispatch({
          type: "authentication/storeToken",
          payload: {
            token: data.body.token,
            isLog: true,
          },
        });
        if (rememberInput) {
          //cookie expiring in one month
          console.log("rememberInput truthy");
          var expiryDate = new Date();
          expiryDate.setMonth(expiryDate.getMonth() + 1);
          document.cookie =
            "token=" + data.body.token + ";expires=" + expiryDate.toUTCString();
          document.cookie = "isLog=true;expires=" + expiryDate.toUTCString();
          navigate("/user");
        } else {
          document.cookie = "token=" + data.body.token;
          document.cookie = "isLog=true";
          navigate("/user");
        }
      } else if (error && error.status === 400) {
        console.log("error && error.status === 400", error);

        console.log("error && error.status === 400", data);
        let errorMessages = document.querySelector(".globalErrorMessage");
        if (errorMessages) errorMessages.textContent = error.data.message;
      }
    } else {
      if (validEmail === false) {
        //TODO corriger

        messageErrorSubmit(
          refEmailErrorMsg,
          emailInput,
          "Email : need to be not empty"
        );
      }
      if (validPassword === false) {
        //TODO corriger
        console.log("ELSE validPassword", validPassword);
        messageErrorSubmit(
          refPasswordError2,
          passwordInput,
          "Password : need to be not empty"
        );
      }
    }
  };

  const messageErrorSubmit = (
    e: React.MutableRefObject<null>,
    input: string,
    message: string
  ) => {
    let htmlElement: HTMLElement = e.current!;
    console.log("MESSAGE ERR element", htmlElement);
    if (input.length === 0) {
      if (htmlElement) {
        htmlElement.textContent = message;
      }
    }
  };

  return (
    <FormSignInStyled className="FormSignIn">
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <FormInputComponent
          id="username"
          forId="username"
          label="Email"
          type="email"
          isCheckbox={false}
          className="input-wrapper"
          required
          refErrorObject={refEmailErrorMsg}
          onChange={(e: any) => emailValidator(e)}
        />

        <FormInputComponent
          id="password"
          forId="password"
          label="Password"
          type="password"
          isCheckbox={false}
          className="input-wrapper"
          required
          refErrorObject={refPasswordError}
          onChange={(e: any) => passwordValidator(e)}
        />
        <div className="refTest" ref={refPasswordError2}></div>
        <div className="globalErrorMessage"></div>
        <FormInputComponent
          id="remember-me"
          forId="remember-me"
          label="Remember me"
          type="checkbox"
          isCheckbox={true}
          className="input-remember"
          onChange={(e: any) => changeCheckboxInput(e)}
        />
        <button className="sign-in-button">Sign In</button>
      </form>
    </FormSignInStyled>
  );
};

export default FormSignIn;
