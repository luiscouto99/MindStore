import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { CartProduct } from './components/CartProduct';
import { Discount } from './components/Discount';
import { Form } from './components/Form';
import { Price } from './components/Price/Price';
import { BackToProductList } from '../../components/BackToProductList/BackToProductList';

import { getUserCart } from './services/getUserCart';
import { getCartTotal } from './services/getCartTotal';
import { deleteItemFromCart } from './services/deleteItemFromCart';

import emptyCart from '../../assets/empty-cart-image.png';

import styled from 'styled-components/macro';

const CartContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 40px;

  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const CartProducts = styled.section`
  width: 68%;
  padding-right: 0px;
  padding-top: 60px;

  @media (max-width: 686px) {
    width: 100%;
  }
`;

const CartProductsTitle = styled.h2`
  margin: 0;
  margin-bottom: 12px;
  padding-bottom: 8px;
  font-size: 30px;
  font-weight: 300;
  border-bottom: 1px solid #999999;
`;

const CartSummary = styled.section`
  width: 28%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: 686px) {
    width: 100%;
  }
`;

const CartSummaryDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e9e9e9;
  padding: 30px;
`;

const CheckoutProductEmptyTitle = styled.p``;

const CheckoutCartEmpty = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  gap: 40px;
`;

const CheckoutProductImg = styled.img`
  min-width: 50px;
  height: 100px;
  object-fit: contain;
`;

function CartPage() {
  const { id } = useParams();
  const [isCartEmpty, setCartEmpty] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const fullName = useRef<HTMLInputElement>();
  const phoneNumber = useRef<HTMLInputElement>();
  const email = useRef<HTMLInputElement>();
  const address = useRef<HTMLInputElement>();
  const discountCode = useRef<HTMLInputElement>();

  useEffect(() => {
    const fetchCart = async () => {
      const response = await getUserCart(id);
      setCartEmpty(response.length === 0);
      setAllProducts(response);
    };
    fetchCart();

    const fetchCartTotal = async () => {
      const response = await getCartTotal(id);
      setTotal(response);
    };
    fetchCartTotal();
  }, [id]);

  const handleRemove = async (productId: number) => {
    const response = await deleteItemFromCart(id, productId);
    setAllProducts(response);
    setCartEmpty(response.length === 0);
  };

  const formInformation = {
    fullName,
    phoneNumber,
    email,
    address,
  };

  return (
    <>
      <Header />

      <CartContainer>
        <CartProducts>
          <CartProductsTitle>Shopping Cart</CartProductsTitle>
          {isCartEmpty ? (
            <CheckoutCartEmpty>
              <CheckoutProductImg src={emptyCart} alt="empty cart" />
              <CheckoutProductEmptyTitle>Your cart is empty!</CheckoutProductEmptyTitle>
            </CheckoutCartEmpty>
          ) : (
            <CartProduct allProducts={allProducts} handleRemove={handleRemove} />
          )}
          <BackToProductList />
        </CartProducts>

        <CartSummary>
          <CartSummaryDetails>
            <Price total={total}></Price>
            <Form formInformation={formInformation}></Form>
          </CartSummaryDetails>
          <Discount discountCode={discountCode} />
        </CartSummary>
      </CartContainer>

      <Footer />
    </>
  );
}

export default CartPage;
