import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface IWhiteCardBasicStyle {
  maxWidth?: boolean;
}

export const WhiteCardBasic = styled.section<IWhiteCardBasicStyle>`
  box-sizing: border-box;
  background-color: white;
  max-width: ${(props) => (props.maxWidth ? "300px" : "auto")};
  margin: 3rem auto 0px;
  padding: 2rem;
`;

interface IWhiteCard {
  children?: ReactNode;
  maxWidth?: boolean;
  className?: string;
}

const WhiteCard: FC<IWhiteCard> = ({ children, maxWidth, className }) => {
  return (
    <WhiteCardBasic maxWidth={maxWidth} className={className}>
      {children}
    </WhiteCardBasic>
  );
};

export default WhiteCard;
