import { FC } from "react";
import styled from "styled-components";
import { WhiteCard, BlockBg, Feature } from "../Components";
import bgImage from "../assets/bank-tree.jpeg";
import chatIcon from "../assets/icon-chat.png";
import moneyIcon from "../assets/icon-money.png";
import securityIcon from "../assets/icon-security.png";

const IndexPageStyled = styled.div`
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
`;
interface IIndexPage {}

const IndexPage: FC<IIndexPage> = () => {
  return (
    <IndexPageStyled className="indexPage">
      <BlockBg className="hero" bgSrc={bgImage}>
        <WhiteCard className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </WhiteCard>
      </BlockBg>
      <section className="features">
        <h2 className="sr-only">Features</h2>

        <Feature imgSrc={chatIcon} title="You are our #1 priority">
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </Feature>

        <Feature imgSrc={moneyIcon} title=" More savings means higher rates">
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </Feature>
        <Feature imgSrc={securityIcon} title="Security you can trust">
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </Feature>
      </section>
    </IndexPageStyled>
  );
};

export default IndexPage;
