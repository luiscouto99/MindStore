// @ts-nocheck

import { useState } from "react";
import { Link } from "react-router-dom"

import QuantityButton from "../QuantityButton/QuantityButton";

import emptyCart from "../../assets/empty-cart-image.png";

import styled, { css } from "styled-components/macro";

const CheckoutProductContainer = styled.section`
	background-color: var(--light-grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
    padding: 10px;

	${(props) =>
		props.isCartEmpty && css`
    	justify-content: flex-start;
	`}
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

const CheckoutProductEmptyTitle = styled.p`
`;

function CheckoutProduct({ handleRemove, product, isCartEmpty }) {
	console.log("is it", isCartEmpty);
	const [productsToAdd, setProductsToAdd] = useState(1);

	// nao funciona
	function handleAddToUserCart(quantity) {
		setProductsToAdd(quantity);
	}

	return (
		<CheckoutProductContainer isCartEmpty={isCartEmpty}>
			{
				isCartEmpty ? (
					<>
						<CheckoutProductImg src={emptyCart} alt="empty cart" />
						<CheckoutProductEmptyTitle>Your cart is empty!</CheckoutProductEmptyTitle>
					</>
				) : (
					<>
						<CheckoutProductLink to={`/productlistpage/${product.id}`}>
							<CheckoutProductImg src={product.image} alt="product" />
						</CheckoutProductLink>

						<CheckoutProductDetails>
							<CheckoutProductCategory>{product.category}</CheckoutProductCategory>
							<CheckoutProductTitle>{product.title}</CheckoutProductTitle>
						</CheckoutProductDetails>

						<QuantityButton quantity={productsToAdd} handleAddToUserCart={handleAddToUserCart} />

						<CheckoutProductPrice>{product.price} €</CheckoutProductPrice>

						<CheckoutProductRemoveBtn onClick={() => handleRemove(product.id)}>X</CheckoutProductRemoveBtn>
					</>
				)
			}
		</CheckoutProductContainer >
	);
}

export default CheckoutProduct;
