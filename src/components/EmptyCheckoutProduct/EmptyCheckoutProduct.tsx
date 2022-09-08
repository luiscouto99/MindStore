import emptyCart from "../../assets/empty-cart-image.png";

import styled from "styled-components/macro";

import "./emptycheckoutproduct.css";

const CheckoutProductContainer = styled.section`
	background-color: var(--light-grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0px;
    padding: 10px;
`;

const EmptyCheckoutProductContainer = styled.section`
  	background-color: var(--light-grey);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    margin: 20px 0px;
    padding: 10px;
`;


function CheckoutProduct() {
	return (
		<>
			<div className="empty_main-product-container">
				<div className="empty_image-div">
					<a href="#">
						<img src={emptyCart} alt="product" />
					</a>
				</div>

				<p>Your cart is empty!</p>
			</div>
		</>
	);


}

export default CheckoutProduct;
