import { useState } from 'react';
import { Link } from 'react-router-dom';

import QuantityButton from '../../../components/QuantityButton/QuantityButton';

import { Product } from '../../../types/product';

import styled from 'styled-components/macro';

const CheckoutProductContainer = styled.section<{isMargin?: boolean}>`
  background-color: var(--light-grey);
  display: flex;
  justify-content: ${(props) => (props.isMargin ? 'flex-start;' : 'space-between;')};
  align-items: center;
  margin: 20px 0px;
  padding: 10px;
`;

const CheckoutProductLink = styled(Link)`
  width: 9%;
  max-height: fit-content;
  background-color: white;
  padding: 5px;
`;

const CheckoutProductImg = styled.img`
  width: 100%;
  min-width: 50px;
  height: 100px;
  object-fit: contain;
`;

const CheckoutProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 45%;
`;

const CheckoutProductCategory = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
`;

const CheckoutProductTitle = styled.div`
  font-weight: 300;
  font-size: 16px;
`;

const CheckoutProductPrice = styled.div`
  margin-left: 20px;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 400;
  text-align: end;
`;

const CheckoutProductRemoveBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #c7c7c7;
  }
`;

function CheckoutProduct({
  handleRemove,
  product,
}: {
  handleRemove: (id: number) => void;
  product: Product;
}) {
  const [productsToAdd, setProductsToAdd] = useState(1);

  // nao funciona
  const handleAddToUserCart = (quantity: number) => setProductsToAdd(quantity);

  return (
    <CheckoutProductContainer>
      <CheckoutProductLink to={`/productlistpage/${product.id}`}>
        <CheckoutProductImg src={product.image} alt="product" />
      </CheckoutProductLink>

      <CheckoutProductDetails>
        <CheckoutProductCategory>{product.category}</CheckoutProductCategory>
        <CheckoutProductTitle>{product.title}</CheckoutProductTitle>
      </CheckoutProductDetails>

      <QuantityButton quantity={productsToAdd} handleAddToUserCart={handleAddToUserCart} />

      <CheckoutProductPrice>{product.price} €</CheckoutProductPrice>

      <CheckoutProductRemoveBtn onClick={() => handleRemove(product.id)}>
        X
      </CheckoutProductRemoveBtn>
    </CheckoutProductContainer>
  );
}

export default CheckoutProduct;
