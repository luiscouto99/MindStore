import QuantityButton from '../../../components/QuantityButton/QuantityButton';
import RenderRating from '../../../components/RenderRating/RenderRating';

import { ButtonLink } from '../../../components/Layout/Layout';

import { BackToProductList } from '../../../components/BackToProductList/BackToProductList';

import { Product } from '../../../types/product';

import styled from 'styled-components/macro';

const ProductContainer = styled.section`
  padding: 40px;
  margin: 40px;
  display: flex;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  background-color: white;
  width: 45%;
  text-align: center;
  height: 1000px;
  object-fit: contain;
`;

const ProductInfo = styled.div`
  width: 50%;
`;

const ProductCategory = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.3);
  margin: 160px 0 40px;
  text-transform: uppercase;
`;

const ProductTitle = styled.h1`
  font-family: 'Prata', serif;
  font-weight: normal;
`;

const ProductPrice = styled.p`
  margin-top: 80px;
  font-size: 36px;
  font-weight: 500;
  color: var(--primary-color);
`;

const ProductDescription = styled.p`
  margin: 80px 0;
  font-size: 20px;
  line-height: 32px;
`;

const ProductCartOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductDisplay = ({
  productsToAdd,
  productData,
  userId,
  handleAddToUserCart,
  handleAddToUserCartFetch,
}: {
  productsToAdd: number;
  productData: Product;
  userId: string | null;
  handleAddToUserCart: (quantity: number) => void;
  handleAddToUserCartFetch: () => Promise<void>;
}) => (
  <>
    {productData && (
      <ProductContainer>
        <ProductImage src={productData.image} alt="main product" />

        <ProductInfo>
          <BackToProductList></BackToProductList>

          <ProductCategory>{productData.category}</ProductCategory>
          <ProductTitle>{productData.title}</ProductTitle>
          <RenderRating data-testid="main-rating" productRating={productData.rating} />
          <ProductPrice>{productData.price}€</ProductPrice>
          <ProductDescription>{productData.description}</ProductDescription>

          <ProductCartOptions>
            <QuantityButton quantity={productsToAdd} handleAddToUserCart={handleAddToUserCart} />
            <ButtonLink to={`/cart/${userId}`} marginLeft onClick={handleAddToUserCartFetch}>
              Add to Cart
            </ButtonLink>
          </ProductCartOptions>
        </ProductInfo>
      </ProductContainer>
    )}
  </>
);
