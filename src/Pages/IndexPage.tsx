import { FC } from "react";
import styled from "styled-components";

const IndexPageStyled = styled.div`
  .hero {
    background-image: url("../img/bank-tree.jpeg");
    background-color: red;
    background-position: 0 -50px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
  }
  .hero-content {
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;
  }
  .hero-content .subtitle {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
  }
  .hero-content .text {
    margin-bottom: 0;
    font-size: 0.9rem;
  }
  @media (min-width: 920px) {
    .hero {
      height: 400px;
      background-position: 0% 33%;
    }
    .hero-content {
      position: absolute;
      top: 50px;
      right: 50px;
      width: 300px;
      margin: 2rem;
    }
    .hero-content .subtitle {
      font-size: 1.5rem;
    }
    .hero-content .text {
      font-size: 1.2rem;
    }
  }
  .features {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 920px) {
    .features {
      flex-direction: row;
    }
  }

  .feature-icon {
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
  }

  .feature-item {
    flex: 1;
    padding: 2.5rem;
  }

  .feature-item-title {
    color: #222;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;
interface IIndexPage {}
//@ts-ignore
const IndexPage: FC<IIndexPage> = () => {
  return (
    <IndexPageStyled className="indexPage">
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <div className="feature-item">
          <img
            src="./img/icon-chat.png"
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className="feature-item">
          <img
            src="./img/icon-money.png"
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">
            More savings means higher rates
          </h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className="feature-item">
          <img
            src="./img/icon-security.png"
            alt="Chat Icon"
            className="feature-icon"
          />
          <h3 className="feature-item-title">Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </IndexPageStyled>
  );
};

export default IndexPage;
