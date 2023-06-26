import { FC } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuStyled = styled.ul`
  display: flex;
  .navLink {
    padding: 20px;
    font-size: 12px;
    text-decoration: none;
    &.active {
      text-decoration: underline;
    }
  }
`;

interface IMenu {
  menuArray?: [];
}
interface IMenuArray {
  url: string;
  linkName: string;
}

const Menu: FC<IMenu> = ({ menuArray }) => {
  return (
    <MenuStyled className="menu">
      {menuArray?.map((item: IMenuArray, index: number) => {
        return (
          <li key={index}>
            <NavLink className="navLink" to={item?.url}>
              {item?.linkName}
            </NavLink>
          </li>
        );
      })}
    </MenuStyled>
  );
};

export default Menu;
