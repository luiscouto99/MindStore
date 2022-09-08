import React from "react";
import "./product.css";
import { useState } from "react"
import starFull from "../../assets/star-full.png";
import { useEffect } from "react";
import { LikedProduct, Product as ProductType } from "../../types/product";

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
		<div className="product-container">
			<div className="product-image-div">
				<img className="product-photo" src={productData.image} alt="picsum" />
			</div>
			<p className="product-rating">
				{Math.round(productData.rating?.rate * 10) / 10}
				<img src={starFull} alt="" className="product-rating-star" />
			</p>
			<div className="product-description">
				<p className="product-name">{productData.title}</p>
				<div>
					<p className="product-price">{productData.price}€</p>
				</div>
			</div>
		</div>
	);
}

export default Product;
