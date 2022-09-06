import React from "react";
import emptyCart from "../../assets/empty-cart-image.png";
import QuantityButton from "../QuantityButton/QuantityButton";
import "./emptycheckoutproduct.css";

function CheckoutProduct() {

		return (
			<>
				<div className="empty_main-product-container">
					<div className="empty_image-div">
						<a href="#">
							<img src={emptyCart} alt="product" />
						</a>
					</div>

					<div className="empty_details-div">
						<p>Your cart is empty!</p>
				
					</div>

					<div className="empty_quantity-div">
						{/* <QuantityButton /> */}
					</div>

					<div className="empty_price-div"> </div>

					<div className="empty_remove-div">
			
					</div>
				</div>
			</>
		);
	

}

export default CheckoutProduct;
