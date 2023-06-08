import { FC } from "react";
import styled from "styled-components";
import { WhiteCard, TransactionButton } from "./";

const LeftWrapper = styled.div`
  width: 100%;
  flex: 1 1 0%;
`;

const RightWrapper = styled.div`
  flex: 0 1 0%;
`;

interface IWideWhiteCard {
  accountTitle?: string;
  accountTitleMultiply?: string;
  accountAmount?: string;
  accountDescription?: string;
  classNameWrapper?: string;
  classNameCta?: string;
}

const WideWhiteCard: FC<IWideWhiteCard> = ({
  accountTitle,
  accountTitleMultiply,
  accountAmount,
  accountDescription,
  classNameWrapper,
  classNameCta,
}) => {
  return (
    <WhiteCard className="account">
      <LeftWrapper className={classNameWrapper}>
        <h3 className="account-title">{`${accountTitle} (x${accountTitleMultiply})`}</h3>
        <p className="account-amount">{`$${accountAmount}`}</p>
        <p className="account-amount-description">{accountDescription}</p>
      </LeftWrapper>
      <RightWrapper className={classNameCta}>
        <TransactionButton className="transaction-button">
          View Transaction
        </TransactionButton>
      </RightWrapper>
    </WhiteCard>
  );
};

export default WideWhiteCard;
