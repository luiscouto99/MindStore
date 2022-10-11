import { Link } from 'react-router-dom';

import {
  Button,
  ButtonLink,
  CredentialsForm,
  CredentialsLabel,
  CredentialsInput,
} from '../../../components/Layout/Layout';

import styled from 'styled-components/macro';

import arrowLeft from '../../../assets/arrow-left.png';

const CheckoutFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  width: 45%;

  @media (max-width: 1200px) {
    width: 540px;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const FormContainerTitle = styled.h2`
  margin-bottom: 72px;
  padding-bottom: 8px;
  font-size: 30px;
  font-weight: 300;
  border-bottom: 1px solid #999999;
`;

const FormInputTitle = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-bottom: 80px;

  @media (max-width: 443px) {
    flex-direction: column;
  }
`;

export const CheckoutForm = ({
  handleInputTyped,
  number,
  name,
  date,
  cvv,
}: {
  handleInputTyped: () => void;
  number: React.MutableRefObject<HTMLInputElement | null>;
  name: React.MutableRefObject<HTMLInputElement | null>;
  date: React.MutableRefObject<HTMLInputElement | null>;
  cvv: React.MutableRefObject<HTMLInputElement | null>;
}) => (
  <CheckoutFormContainer>
    <FormContainerTitle>Payment Details</FormContainerTitle>

    <CredentialsForm checkoutForm>
      <CredentialsLabel htmlFor="number">
        <FormInputTitle>Card Number</FormInputTitle>
        <CredentialsInput
          type="text"
          placeholder="4242 4242 4242 4242"
          maxLength={25}
          ref={number}
          onChange={handleInputTyped}
        />
      </CredentialsLabel>

      <CredentialsLabel htmlFor="name">
        <FormInputTitle>Cardholder Name</FormInputTitle>
        <CredentialsInput
          type="text"
          placeholder="Joaquim Alberto"
          maxLength={18}
          ref={name}
          onChange={handleInputTyped}
        />
      </CredentialsLabel>

      <CredentialsLabel htmlFor="date">
        <FormInputTitle>Exp Date</FormInputTitle>
        <CredentialsInput
          type="text"
          placeholder="07 / 2026"
          maxLength={9}
          ref={date}
          onChange={handleInputTyped}
        />
      </CredentialsLabel>

      <CredentialsLabel htmlFor="cvv">
        <FormInputTitle>CVV</FormInputTitle>
        <CredentialsInput
          type="text"
          placeholder="424"
          maxLength={3}
          ref={cvv}
          onChange={handleInputTyped}
        />
      </CredentialsLabel>

      <ButtonContainer>
        <ButtonLink to="/cart" secondary>
          Cancel
        </ButtonLink>
        <Button type="submit">Accept Payment</Button>
      </ButtonContainer>
    </CredentialsForm>

    <Link to="/cart" className="product-detail_link">
      <img src={arrowLeft} alt="" />
      <span>&nbsp; Back to Product List</span>
    </Link>
  </CheckoutFormContainer>
);
