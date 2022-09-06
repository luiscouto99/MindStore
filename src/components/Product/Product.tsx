// @ts-nocheck

import React from "react";
import "./product.css";
import { useState } from "react"
import heartEmpty from "../../assets/heart-empty.png";
import heartFull from "../../assets/heart-full.png";
import starFull from "../../assets/star-full.png";
import { useEffect } from "react";

function Product(props) {
	const { productProp } = props;
	const [productData, setProductData] = useState({});
	const [rating, setRating] = useState();
	const [isButtonLiked, setIsButtonLiked] = useState(false);

	useEffect(() => {
		async function fetchASingleProduct() {
			const response = await fetch(`/api/v1/users/products/${productProp.id}`);
			const json = await response.json();
			setProductData(json);
			setRating(json.rating);
		};
		fetchASingleProduct();
	}, []);

	// function handleLikeClick() {
	// 	setIsButtonLiked(!isButtonLiked);
	// };

	return (
		<>
			<div className="product-container">
				<div className="product-image-div">
					<a href="#">
						<img className="product-photo" src={productData.image} alt="picsum" />
					</a>
					{/* <button onClick={handleLikeClick} className="product-button">
						<img src={isButtonLiked ? heartFull : heartEmpty} alt="" />
					</button> */}
				</div>
				<p className="product-rating">
					{Math.round(rating?.rate * 10) / 10}
					<img src={starFull} alt="" className="product-rating-star" />
				</p>
				<div className="product-description">
					<p className="product-name">{productData.title}</p>
					<div>
						<p className="product-price">{productData.price}€</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Product;
