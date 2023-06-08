import React, { FC, ReactNode } from "react";

import styled from "styled-components";

const MainStyled = styled.main`
  flex: 1;
`;

interface IMain {
  children?: ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
  return <MainStyled className="main">{children}</MainStyled>;
};

export default Main;
