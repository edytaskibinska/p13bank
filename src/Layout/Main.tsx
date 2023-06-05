import React, { FC, ReactNode } from "react";

import styled from "styled-components";

const MainStyled = styled.main`
  border: 2px solid red;
  flex: 1;
`;

interface IMain {
  children?: ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
  return <MainStyled className="main">{children}</MainStyled>;
};

export default Main;
