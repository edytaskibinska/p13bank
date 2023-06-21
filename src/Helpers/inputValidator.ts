export const validator = (
  e: React.ChangeEvent<HTMLInputElement>,
  valid: boolean,
  errormessage: string,
  setInput: (e: any) => void,
  setValidator: (valid: boolean) => void,
  setErrorMessage: (e: any, errorMessage: string) => void
) => {
  setInput(e.target.value);
  setValidator(valid);
  setErrorMessage(e, errormessage);
  return valid;
};


