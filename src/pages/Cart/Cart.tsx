// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import leftArrow from "../../assets/arrow-left.png";

import styled from "styled-components/macro";
import "./cart.css";

const CartContainer = styled.main`
	display: flex;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;

	@media (max-width:1300px) {
        flex-direction: column;
        align-items: center;
        margin-left: 40px;
        margin-right: 40px;
	}
`;

function CartPage() {
	const { id } = useParams();
	const [checkoutClicked, setCheckoutClicked] = useState(false);
	const [discountClicked, setDiscountClicked] = useState(false);
	const [isCartEmpty, setCartEmpty] = useState(false);
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState();
	const fullName = useRef("");
	const phoneNumber = useRef("");
	const email = useRef("");
	const address = useRef("");
	const discountCode = useRef("");

	useEffect(() => {
		async function fetchAllProducts() {
			const request = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": localStorage.getItem("token")
				},
			};

			const response = await fetch(`/api/v1/users/shoppingcart/${id}`, request);
			const products = await response.json();
			if (products.length === 0) {
				setCartEmpty(true);
			} else {
				setCartEmpty(false);
			}
			setAllProducts(products);
		}
		fetchAllProducts();
		fetchTotal();
	}, []);

	async function fetchTotal() {
		const request = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": localStorage.getItem("token")
			},
		};

		const response = await fetch(`/api/v1/users/shoppingcart/price/${id}`, request);
		const text = await response.text(); // text = 1000€
		const removeEuroSymbol = text.split("€"); // text = ["1000", ""]
		const finalPrice = Number(removeEuroSymbol[0]); // removeEuroSymbol[0] = "1000"
		const roundedTotal = Math.round((finalPrice + Number.EPSILON) * 100) / 100;
		setTotal(roundedTotal);
	}

	function handleCheckout(event) {
		event.preventDefault();
		setCheckoutClicked(true);
	}

	function handleDiscount(event) {
		event.preventDefault();
		setDiscountClicked(true);
	}

	async function handleRemove(productId) {
		const request = {
			method: "PATCH",
			headers: {

				"Content-Type": "application/json",
				"Authorization": localStorage.getItem("token")
			},
		};

		const response = await fetch(`/api/v1/users/removefromcart?userid=${id}&productid=${productId}`, request);
		const json = await response.json();
		const finalProducts = json;
		setAllProducts(finalProducts);
		fetchTotal();

		if (finalProducts.length === 0) {
			setCartEmpty(true);
		}
	};

	return (
		<>
			<Header />
			<CartContainer>
				<div className="main-container">
					<div className="main-header">
						<h2>Shopping Cart</h2>
					</div>
					<div className="main-products">
						{
							allProducts.map((product) => {
								return (
									<CheckoutProduct key={product.id} isCartEmpty={isCartEmpty} handleRemove={() => { handleRemove(product.id) }} product={product} />
								);
							})
						}
					</div>
					<div className="main-footer">
						<a href="/productlistpage">
							<img src={leftArrow} alt="" />
							<span>&nbsp; Back to Product List</span>
						</a>
					</div>
				</div>

				<div className="secondary-container">
					<div className="payment-container">
						<div className="payment-header">
							<h2>Summary</h2>
							<div className="payment-header-info">
								<p>Total:</p>
								<p>{total} €</p>
							</div>
						</div>

						<div>
							<form className="payment-form-cart" onSubmit={handleCheckout}>
								<label className="payment-label-cart" htmlFor="full-name">
									<input type="text" name="full-name" ref={fullName} placeholder="Full Name" />
								</label>
								<label className="payment-label-cart" htmlFor="phone-number">
									<input type="text" name="phone-number" ref={phoneNumber} placeholder="Phone Number" />
								</label>
								<label className="payment-label-cart" htmlFor="email">
									<input type="text" name="email" ref={email} placeholder="Email" />
								</label>
								<label className="payment-label-cart" htmlFor="address">
									<input type="text" name="address" ref={address} placeholder="Address" />
								</label>
								<button className="payment-button-cart" type="submit">Checkout</button>
							</form>
						</div>
					</div>

					<div className="discount-container">
						<form className="discount-container-form" onSubmit={handleDiscount}>
							<label className="discount-label-cart" htmlFor="discount-code">
								<input type="text" name="discount-code" ref={discountCode} placeholder="Enter discount code" />
							</label>
							<button className="payment-submit-button" type="submit">Submit</button>
						</form>
					</div>
				</div>
			</CartContainer>

			<Footer />
		</>
	);
}

export default CartPage;
