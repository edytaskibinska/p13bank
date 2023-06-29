import { FC, ChangeEvent, LegacyRef } from "react";
import styled from "styled-components";

export const FormInputComponentBasic = styled.div`
  label {
    font-weight: bold;
  }
  input {
    padding: 5px;
    font-size: 1.2rem;
  }
  .errorMsg {
    color: red;
    font-size: 10px;
  }
`;

interface IFormInputComponent {
  id: string;
  forId: string;
  label: string;
  type: string;
  isCheckbox: boolean;
  className: string;
  value?: string | number;
  placeholder?: string;
  required?: boolean;
  refErrorObject?: LegacyRef<HTMLDivElement>;
  inputClassName?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInputComponent: FC<IFormInputComponent> = ({
  id,
  forId,
  label,
  type,
  isCheckbox,
  className,
  value,
  placeholder,
  inputClassName,
  required,
  refErrorObject,
  onChange,
}) => {
  return (
    <FormInputComponentBasic id={id} className={className}>
      {isCheckbox ? (
        <>
          <input
            type={type}
            id={forId}
            required={required}
            className={inputClassName}
            onChange={onChange}
          />
          <label htmlFor={forId}>{label}</label>
          <div ref={refErrorObject} className="errorMsg"></div>
        </>
      ) : (
        <>
          <label htmlFor={forId}>{label}</label>
          <input
            type={type}
            id={forId}
            required={required}
            value={value}
            placeholder={placeholder}
            className={inputClassName}
            onChange={onChange}
          />
          <div ref={refErrorObject} className="errorMsg"></div>
        </>
      )}
    </FormInputComponentBasic>
  );
};

export default FormInputComponent;
