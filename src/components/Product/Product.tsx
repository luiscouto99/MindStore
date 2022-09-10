import { useState } from "react"
import { useEffect } from "react";

import styled, { css } from "styled-components/macro";

import starFull from "../../assets/star-full.png";

import { LikedProduct, Product as ProductType } from "../../types/product";

const ProductContainer = styled.div`
	background-color: white;
    position: relative;
    height: 400px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ProductImage = styled.img`
	height: 80%;
	object-fit: contain;
`;

const ProductRating = styled.p`
	display: flex;
    align-items: center;
    margin: 0;
    justify-content: flex-star;
    font-size: 14px;
`;

const ProductRatingStar = styled.img`
	margin-left: 4px;
    width: 12px;
`;

const ProductDescription = styled.div`
	display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

type ProductTextProps = {
	price?: boolean;
}
const ProductText = styled.p<ProductTextProps>`
	font-size: 14px;
    padding-right: 10px;
    margin-bottom: 7px;

	${(props) => props.price && css`
		color: var(--primary-color);
		font-weight: 400;
	`}
`;



function Product({ productProp }: { productProp: LikedProduct | ProductType }) {
	const [productData, setProductData] = useState({} as ProductType | LikedProduct);

	useEffect(() => {
		async function fetchASingleProduct() {
			const response = await fetch(`/api/v1/users/products/${productProp.id}`);
			const json = await response.json();
			setProductData(json);
		};
		fetchASingleProduct();
	}, [productProp.id]);

	return (
		<ProductContainer>
			<ProductImage src={productData.image} alt="product image" />
			<ProductRating>
				{Math.round(productData.rating?.rate * 10) / 10}
				<ProductRatingStar src={starFull} alt="star icon" />
			</ProductRating>
			<ProductDescription>
				<ProductText>{productData.title}</ProductText>
				<ProductText price>{productData.price}€</ProductText>
			</ProductDescription>
		</ProductContainer>
	);
}

export default Product;
