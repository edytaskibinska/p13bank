//TODO indexation in typescript env like import { Nav, Footer } from "./Components";
import React, { FC, ReactNode } from "react";
import logo from "../assets/argentBankLogo.png";
import styled from "styled-components";

import Footer from "./Footer";
import Nav from "./Nav";
import Menu from "./Menu";
import Main from "./Main";

interface ILayout {
  content?: ReactNode;
  menu?: any;
}
const LayoutStyled = styled.div`
  * {
    box-sizing: border-box;
  }
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .main {
    flex-grow: 1;
  }
`;

const Layout: FC<ILayout> = ({ menu, content }) => {
  return (
    <LayoutStyled>
      <Menu menuArray={menu} />
      <Nav logoSrc={logo} title="Argent Bank<"></Nav>

      <Main>{content}</Main>

      <Footer>Copyright 2020 Argent Bank</Footer>
    </LayoutStyled>
  );
};
export default Layout;
