import { useRef, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Card } from './components/Card';
import { CheckoutForm } from './components/CheckoutForm';

import styled from 'styled-components/macro';

const CheckoutContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px;
  gap: 20px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

function Checkout() {
  const name = useRef<HTMLInputElement>(null);
  const number = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const cvv = useRef<HTMLInputElement>(null);
  const [rerender, setRerender] = useState(false);

  const handleInputTyped = () => {
    setRerender(!rerender);

    if (
      (number.current as unknown as HTMLInputElement).value.split(/[-\s]+/).join('').length === 4 ||
      (number.current as unknown as HTMLInputElement).value.split(/[-\s]+/).join('').length === 8 ||
      (number.current as unknown as HTMLInputElement).value.split(/[-\s]+/).join('').length === 12
    ) {
      (number.current as unknown as HTMLInputElement).value += ' - ';
    }

    if ((date.current as unknown as HTMLInputElement).value.length === 2) {
      (date.current as unknown as HTMLInputElement).value += ' / ';
    }
  };

  return (
    <>
      <Header />
      <CheckoutContainer>
        <Card number={number} name={name} date={date} cvv={cvv} />
        <CheckoutForm
          handleInputTyped={handleInputTyped}
          number={number}
          name={name}
          date={date}
          cvv={cvv}
        />
      </CheckoutContainer>
      <Footer />
    </>
  );
}

export default Checkout;
