import { FC, ReactNode } from "react";
import styled from "styled-components";

interface ITransactionButtonBasicStyle {}

const TransactionButtonStyled = styled.button<ITransactionButtonBasicStyle>`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: rgb(0, 188, 119);
  background-color: rgb(0, 188, 119);
  color: rgb(255, 255, 255);
`;

interface ITransactionButton {
  children?: ReactNode;
  className?: string;
}

const TransactionButton: FC<ITransactionButton> = ({ children, className }) => {
  return (
    <TransactionButtonStyled className={className}>
      {children}
    </TransactionButtonStyled>
  );
};

export default TransactionButton;
