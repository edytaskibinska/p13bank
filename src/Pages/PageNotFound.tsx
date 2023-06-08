import { FC, useEffect, useState } from "react";
import styled from "styled-components";

const Page404Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  max-width: 100%;
  padding: 20px;

  .text404 {
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 142.6%;
  }
  .oups {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 150px;
    text-align: center;
  }
  .link {
    color: #2c3e50;
    margin-bottom: 70px;
  }
  @media all and (max-width: 650px) {
    .text404 {
      font-size: 120px;
    }
    .oups {
      font-size: 14px;
      margin-bottom: 60px;
    }
  }
`;

interface IPageNotFound {}

//@ts-ignore
const PageNotFound: FC<IPageNotFound> = () => {
  const [component, setComponent] = useState(false);

  useEffect(() => {
    const load = setTimeout(() => {
      setComponent(true);
    }, 500);
    console.log(load);
  }, []);

  return (
    component && (
      <Page404Styled className="page404">
        <div className="text404">404</div>
        <div className="oups">
          Oups! La page que vous demandez n'existe pas.
        </div>
        <a className="link" href="/">
          Retourner sur la page d’accueil
        </a>
      </Page404Styled>
    )
  );
};

export default PageNotFound;
