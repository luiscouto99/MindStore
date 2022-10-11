import styled, { css } from 'styled-components/macro';

const CardMock = styled.section`
  background: linear-gradient(283.38deg, #bcbcbc 6.57%, rgba(188, 188, 188, 0) 221.12%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  width: 40%;
  height: 380px;

  @media (max-width: 1200px) {
    width: 540px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const CardNumberContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;
`;

const CardPlaceholder = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
`;

type CardInputTextProps = {
  number?: boolean;
};
const CardInputText = styled.p<CardInputTextProps>`
  margin: 0;

  ${(props) =>
    props.number &&
    css`
      color: white;
      font-size: 24px;
    `}
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: bottom;
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
`;

const CardInfoContainer = styled.div``;

export const Card = ({
  number,
  name,
  date,
  cvv,
}: {
  number: React.MutableRefObject<HTMLInputElement | null>;
  name: React.MutableRefObject<HTMLInputElement | null>;
  date: React.MutableRefObject<HTMLInputElement | null>;
  cvv: React.MutableRefObject<HTMLInputElement | null>;
}) => (
  <CardMock>
    <CardNumberContainer>
      <CardPlaceholder>Card Number</CardPlaceholder>
      <CardInputText number>{(number.current as unknown as HTMLInputElement).value}</CardInputText>
    </CardNumberContainer>

    <CardInfo>
      <CardInfoContainer>
        <CardPlaceholder>Name</CardPlaceholder>
        <CardInputText>{(name.current as unknown as HTMLInputElement).value}</CardInputText>
      </CardInfoContainer>

      <CardInfoContainer>
        <CardPlaceholder>Exp Date</CardPlaceholder>
        <CardInputText>{(date.current as unknown as HTMLInputElement).value}</CardInputText>
      </CardInfoContainer>

      <CardInfoContainer>
        <CardPlaceholder>CVV</CardPlaceholder>
        <CardInputText>{(cvv.current as unknown as HTMLInputElement).value}</CardInputText>
      </CardInfoContainer>
    </CardInfo>
  </CardMock>
);
