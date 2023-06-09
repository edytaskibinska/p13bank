import { FC, ReactNode } from "react";
import logo from "../assets/argentBankLogo.png";
import styled from "styled-components";

import Footer from "./Footer";
import Nav from "./Nav";
import Main from "./Main";


interface ILayout {
  content?: ReactNode;
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
`

const Layout: FC<ILayout> = ({ content }) => {
  return (
    <LayoutStyled className="Layout">
      <Nav logoSrc={logo} title="Argent Bank<"></Nav>
      <Main>{content}</Main>
      <Footer>Copyright 2020 Argent Bank</Footer>
    </LayoutStyled>
  );
};

export default Layout;
