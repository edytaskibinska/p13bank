import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const FeatureStyled = styled.div`
  flex: 1;
  padding: 2.5rem;
  .feature-icon {
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
  }
  .feature-item-title {
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

interface IFeature {
  children?: ReactNode;
  title?: string;
  imgSrc?: string;
}

const Feature: FC<IFeature> = ({ children, title, imgSrc }) => {
  return (
    <FeatureStyled className="feature-item">
      <img src={`${imgSrc}`} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      {children}
    </FeatureStyled>
  );
};

export default Feature;
