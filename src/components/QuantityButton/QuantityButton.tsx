// @ts-nocheck
import styled from "styled-components";

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    height: 45px;
    margin-right: 20px;
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

type QuantityButtonProps = {
    handleAddToUserCart: (quantity: number) => void,
    quantity: number
}

const QuantityButton = ({handleAddToUserCart, quantity}: QuantityButtonProps) => {

    function handleDecrement() {
        if (quantity === 1) {
            handleAddToUserCart(quantity);
            return;
        }
        
        handleAddToUserCart(quantity - 1);
    }

    function handleIncrement() {
        if (quantity === 10) {
            handleAddToUserCart(quantity);
            return;
        }
    
        handleAddToUserCart(quantity + 1);
    }

    return (
        <QuantityContainer>
            <QuantityBtn onClick={handleDecrement}>-</QuantityBtn>
            <QuantityCounter>{quantity}</QuantityCounter>
            <QuantityBtn onClick={handleIncrement}>+</QuantityBtn>
        </QuantityContainer>
    )
}

export default QuantityButton;