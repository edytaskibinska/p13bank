import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface IExampleStyle {
  color?: any;
  bgColor?: string;
}

export const ExampleSpan = styled.span``;
export const ExampleBasic = styled.label<IExampleStyle>`
  color: ${(props) => props.color ?? "red"};
  background-color: ${(props) => props.bgColor};
  &:first-letter {
    text-transform: uppercase;
  }
  &.bold {
    font-weight: 600;
  }
`;
interface IExample {
  forid?: string;
  children?: ReactNode;
  color?: any;
  isBold?: boolean;
  bgColor?: string;
}

const Example: FC<IExample> = ({ forid, children, color, isBold, bgColor }) => {
  return (
    <ExampleBasic
      //className={isBold && "bold"}
      bgColor={bgColor}
      color={color}
      htmlFor={forid}
    >
      {children}
    </ExampleBasic>
  );
};

export default Example;
