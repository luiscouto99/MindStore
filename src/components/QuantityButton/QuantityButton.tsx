import styled from 'styled-components/macro';

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  height: 51px;
`;

const QuantityBtn = styled.button`
  background-color: transparent;
  border: none;
  color: rgba(0, 0, 0, 0.3);
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`;

const QuantityCounter = styled.p`
  background-color: transparent;
  border: none;
  color: var(--primary-color);
  width: 20px;
  font-size: 18px;
  text-align: center;
  font-weight: 400;
`;

const QuantityButton = ({
  handleAddToUserCart,
  quantity,
}: {
  handleAddToUserCart: (quantity: number) => void;
  quantity: number;
}) => {
  const handleDecrement = () => {
    if (quantity === 1) {
      handleAddToUserCart(quantity);
      return;
    }

    handleAddToUserCart(quantity - 1);
  };

  const handleIncrement = () => {
    if (quantity === 10) {
      handleAddToUserCart(quantity);
      return;
    }

    handleAddToUserCart(quantity + 1);
  };

  return (
    <QuantityContainer data-testid="qty-container">
      <QuantityBtn data-testid="decrement-button" onClick={handleDecrement}>
        -
      </QuantityBtn>
      <QuantityCounter data-testid="value">{quantity}</QuantityCounter>
      <QuantityBtn data-testid="increment-button" onClick={handleIncrement}>
        +
      </QuantityBtn>
    </QuantityContainer>
  );
};

export default QuantityButton;
