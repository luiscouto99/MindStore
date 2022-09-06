// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/Product/Product";
import searchBar from "../../assets/search-bar.png";
import heartEmpty from "../../assets/heart-empty.png";
import heartFull from "../../assets/heart-full.png";
import "./productlistpage.css";

function ProductListPage() {
	const [productPageColor, setProductPageColor] = useState(false);
	const [allProducts, setAllProducts] = useState([]);
	const [pageBtnValue, setPageBtnValue] = useState(1);
	const inputSearch = useRef("");
	const [sort, setSort] = useState("ASC");
	const [link, setLink] = useState("?field=title&pagesize=9&direction=");
	const [page, setPage] = useState("1");
	const [isButtonLiked, setIsButtonLiked] = useState(false);

	useEffect(() => {
		setProductPageColor(true);

		async function fetchAllProducts() {
			const response = await fetch(`/api/v1/users/products${link}${sort}&page=${page}`);
			const products = await response.json();
			setAllProducts(products);
			console.log("all products", products);
		}
		fetchAllProducts();
	}, [link, sort, page]);


	function handleEnterPress(event) {
		if (event.key === "Enter") {
			console.log(inputSearch.current.value, "enter press here! ");
		}
	}

	function handleIconClick() {
		console.log(inputSearch.current.value, "icon click here! ");
	}

	async function handleSortFetch(direction) {
		// const response = await fetch(`/api/v1/users/products?direction=${direction}&field=title&page=1&pagesize=9`);
		// const json = await response.json();
		// setAllProducts(json);
		setSort(direction);
	}

	async function handleCategoryFetch(link) {
		// const response = await fetch(`/api/v1/users/products/category?category=${field}&page=1&pagesize=9&direction=${sort}`);
		// const json = await response.json();
		// setAllProducts(json);
		console.log("category fetch");
		setLink(link);
	}

	async function handlePriceFetch(link) { //Object { min: 449, max: 1000 }
		// let minPrice = priceObj.min;
		// let maxPrice = priceObj.max;
		// const response = await fetch(`/api/v1/users/products/price?direction=${sort}&page=1&pagesize=9&min=${minPrice}&max=${maxPrice}`);
		// // /api/v1/users/products/price?direction=ASC&page=1&pagesize=9&min=1&max=5000
		// const json = await response.json();
		// setAllProducts(json);
		setLink(link);
		console.log("price fetch");
	}

	async function handleRatingFetch(link) {
		// const response = await fetch(`/api/v1/users/products?direction=ASC&field=${ratingId}&page=1&pagesize=9`);
		// // /api/v1/users/products?direction=ASC&field=${ratingId}&page=1&pagesize=9
		// const json = await response.json();
		// setAllProducts(json);
		setLink(link);
		console.log("rating fetch");
	}
	
	function handleLikeClick(index) {
		console.log(index);
		setIsButtonLiked(!isButtonLiked);
	};


	const myArray = allProducts.map((product, index) => {
		return (
			<div className="like-div">
				<button onClick={() => { handleLikeClick(product.id) }} className="product-button">
					<img id={product.id} src={isButtonLiked ? heartFull : heartEmpty} alt="" />
				</button>
				<Link key={index} to={`/productlistpage/${product.id}`}>
					<Product key={product.id} productProp={product} />
				</Link>
			</div>
		)
	});

	async function handleSearchBar() {
		const response = await fetch(`/api/v1/users/products/name?title=${inputSearch.current.value}&page=1&pagesize=6`);
		const json = await response.json();
		setAllProducts(json);
	}

	async function handlePageChange(event) {
		// setPageBtnValue(event.target.value);
		// const pageNumber = event.target.value;
		// const response = await fetch(`/api/v1/users/products?direction=DESC&field=title&page=${pageNumber}&pagesize=9`);
		// const products = await response.json();
		// setAllProducts(products);
		setPage(event.target.value);
	}

	return (
		<>
			<Header productPageColor={productPageColor} />

			<div className="product-list-container">

				<Sidebar className="sidebar" handleSortFetch={handleSortFetch} handleCategoryFetch={handleCategoryFetch} handlePriceFetch={handlePriceFetch} handleRatingFetch={handleRatingFetch} />


				<div className="first-grid">
					<div className="inner-search-div">
						<label className="label-flex">
							<input className="search-div" type="text" placeholder="Search" ref={inputSearch} onKeyPress={handleEnterPress} onChange={handleSearchBar} />
							<a href="#" onClick={handleIconClick}>
								<img className="search-icon" src={searchBar} alt="" />
							</a>
						</label>
						<div className="blank-div"></div>
						<div className="blank-div"></div>
						<div className="blank-div"></div>
					</div>

					<div className="inner-product-grid">
						{myArray}
					</div>
				</div>
			</div>

			<div className="pagination">
				<button value={1} onClick={handlePageChange} className={pageBtnValue === 1 ? "btn-page-numbers active" : "btn-page-numbers" }>1</button>
				<button value={2} onClick={handlePageChange} className="btn-page-numbers">2</button>
				<button value={3} onClick={handlePageChange} className="btn-page-numbers">3</button>
			</div>

			<Footer />
		</>
	);
}

export default ProductListPage;
