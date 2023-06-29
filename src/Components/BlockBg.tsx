import { FC, ReactNode } from "react";
import styled from "styled-components";

interface IBlockBgBasicStyle {
  bgSrc?: string;
}

const BlockBgStyled = styled.div<IBlockBgBasicStyle>`
  background-image: url(${(props) => props.bgSrc});
  background-color: white;
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;
`;

interface IBlockBg {
  children?: ReactNode;
  className?: string;
  bgSrc?: string;
}

const BlockBg: FC<IBlockBg> = ({ children, className, bgSrc }) => {
  return (
    <BlockBgStyled className={className} bgSrc={bgSrc}>
      {children}
    </BlockBgStyled>
  );
};

export default BlockBg;
