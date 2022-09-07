// @ts-nocheck

import React, { useState }  from "react";
import { Link } from "react-router-dom"
import QuantityButton from "../QuantityButton/QuantityButton";
import "./checkoutproduct.css";

function CheckoutProduct(props) {
	const { handleRemove, product } = props;
	const [productsToAdd, setProductsToAdd] = useState(1);
	
	// nao funciona
	function handleAddToUserCart(quantity) {
        setProductsToAdd(quantity);
    }

	return (
		<div className="main-product-container">
			<div className="image-div">
				<Link to={`/productlistpage/${product.id}`}>
					<img src={product.image} alt="product" />
				</Link>
			</div>

			<div className="details-div">
				<p className="details-div_category">{product.category}</p>

				<h1 className="details-div_title">{product.title}</h1>
			</div>

			<div className="quantity-div">
				<QuantityButton quantity={productsToAdd} handleAddToUserCart={handleAddToUserCart} />
			</div>

			<div className="price-div">{product.price} €</div>

			<div className="remove-div">
				<button className="remove-button" onClick={() => handleRemove(product.id)}>
					X
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
