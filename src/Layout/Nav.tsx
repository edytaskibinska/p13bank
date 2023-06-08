import { FC } from "react";
import styled from "styled-components";
import UserIcon from "../assets/UserIcon";

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
  }
  a.router-link-exact-active {
    color: #42b983;
  }
  .main-nav-item {
    text-decoration: none;
    margin-right: 0.5rem;
    display: flex;
    min-width: 150px;
    height: 30px;
    align-items: center;
    justify-content: flex-end;
    svg {
      display: inline-block;
      height: 20px;
      margin-right: 10px;
    }
  }
  .main-nav-item:hover {
    text-decoration: underline;
  }
  .main-nav-logo {
    display: flex;
    align-items: center;
  
  }
  .main-nav-logo-image {
    max-width: 100%;
    width: 200px;
  }
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }
`;

interface INav {
  logoSrc: string;
  title: string;
}

const Nav: FC<INav> = ({ logoSrc, title}) => {
  return (
    <NavStyled className="main-nav">
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src={logoSrc}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">{title}</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./sign-in">
          <UserIcon fill="rgb(44, 62, 80)"/>
          Sign In
        </a>
      </div>
    </NavStyled>
  );
};

export default Nav;
