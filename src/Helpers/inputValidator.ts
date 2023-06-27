import { ChangeEvent } from "react";

export const validator = (
  e: ChangeEvent<HTMLInputElement>,
  valid: boolean,
  errormessage: string,
  setInput: (e: string) => void,
  setValidator: (valid: boolean) => void,
  setErrorMessage: (e: ChangeEvent<Element>, errorMessage: string) => void
) => {
  setInput(e.target.value);
  setValidator(valid);
  setErrorMessage(e, errormessage);
  return valid;
};

export const changeValidHandler = (
  e: ChangeEvent<HTMLInputElement>,
  valid: boolean,
  message: string,
  setInput: (e: string) => void,
  setValidInput: (valid: boolean) => void
) => {
  setInput(e.target.value);
  let nextElement = e.target.nextSibling;
  if (nextElement) {
    nextElement.textContent = message;
  }
  setValidInput(valid);
};
