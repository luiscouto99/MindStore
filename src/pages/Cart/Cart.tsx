// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { CartProduct } from "./components/CartProduct";
import { Discount } from "./components/Discount";
import { Form } from "./components/Form";
import { Price } from "./components/Price";
import { ViewProductList } from "./components/ViewProductList";

import styled from "styled-components/macro";

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

function CartPage() {
	const { id } = useParams();
	const [checkoutClicked, setCheckoutClicked] = useState(false);
	const [discountClicked, setDiscountClicked] = useState(false);
	const [isCartEmpty, setCartEmpty] = useState(false);
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
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

	async function handleRemove(productId: number) {
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
				<CartProducts>
					<CartProductsTitle>Shopping Cart</CartProductsTitle>
					<CartProduct allProducts={allProducts} isCartEmpty={isCartEmpty} handleRemove={handleRemove}></CartProduct>
					<ViewProductList></ViewProductList>
				</CartProducts>

				<CartSummary>
					<CartSummaryDetails>
						<Price total={total}></Price>
						<Form handleCheckout={handleCheckout} fullName={fullName} phoneNumber={phoneNumber} email={email} address={address}></Form>
					</CartSummaryDetails>
					<Discount handleDiscount={handleDiscount} discountCode={discountCode}></Discount>
				</CartSummary>
			</CartContainer>

			<Footer />
		</>
	);
}

export default CartPage;
