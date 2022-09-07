// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MainLayout } from "../../components/Layout/Layout";

import searchBar from "../../assets/search-bar.png";
import heartEmpty from "../../assets/heart-empty.png";
import heartFull from "../../assets/heart-full.png";

import styled from "styled-components";
import "./productlistpage.css";

const ListContainer = styled.section`
    display: flex;
    flex-direction: row;
`;

const SearchBarLabel = styled.label`
    margin-top: 30px;
	width: 300px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
`;

const SearchBarInput = styled.input`
	width: 100%;
	border: none;
	border-bottom: 1px solid rgb(149, 149, 149);
   	background-color: var(--light-grey);
	color: gray;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
`;

const SearchBarIcon = styled.img`
	width: 15px;
    height: 15px;
`;

const ProductGrid = styled.div`
    width: 100%;
	margin-top: 20px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 20px;
`;

const ProductContainer = styled.div`
	position: relative;
`;

const FavouriteButton = styled.button`
    position: absolute;
	top: 20px;
    right: 20px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
	border: none;
    background-color: transparent;
    z-index: 1;
	cursor: pointer;
`;

const FavouriteIcon = styled.img`
    width: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const PaginationContainer = styled.section`
	display: flex;
    justify-content: center;
    margin: 20px 0 60px 20%;
`;

const PaginationButton = styled.button`
    margin: 0 12px;
    border: none;
    font-weight: 500;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: transparent;

	&:focus, &.active {
		color: var(--primary-color);
	}
`;

const ProductDisplay = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
`;

function ProductListPage() {
	const [allProducts, setAllProducts] = useState([]);
	const inputSearch = useRef("");
	const [sort, setSort] = useState("ASC");
	const [link, setLink] = useState("?field=title&pagesize=9&direction=");
	const [page, setPage] = useState("1");

	useEffect(() => {
		async function fetchAllProducts() {
			const response = await fetch(`/api/v1/users/products${link}${sort}&page=${page}`);
			const products = await response.json();

			const likedArr = products.map((product) => {
				const obj = {
					productInfo: product,
					isLiked: false,
				}
				return obj;
			});

			setAllProducts(likedArr);
		}
		fetchAllProducts();
	}, [link, sort, page]);


	function handleEnterPress(event) {
		if (event.key === "Enter") {
			console.log(inputSearch.current.value, "enter press here! ");
		}
	}

	function handleLikeClick(productId) {
		const newArr = [...allProducts];

		for (let i = 0; i < newArr.length; i++) {
			if (productId === newArr[i].productInfo.id) {
				newArr[i].isLiked = !newArr[i].isLiked;
				setAllProducts(newArr);
			}
		}
	};

	async function handleSearchBar() {
		const response = await fetch(`/api/v1/users/products/name?title=${inputSearch.current.value}&page=1&pagesize=6`);
		const json = await response.json();
		setAllProducts(json);
	}

	return (
		<>
			<Header />

			<MainLayout>
				<ListContainer>
					<Sidebar className="sidebar" handleSortFetch={(direction) => setSort(direction)} handleCategoryFetch={() => setLink(link)} handlePriceFetch={(link) => setLink(link)} handleRatingFetch={(link) => setLink(link)} />
					<ProductDisplay>
						<SearchBarLabel>
							<SearchBarInput type="text" placeholder="Search" ref={inputSearch} onKeyPress={handleEnterPress} onChange={handleSearchBar} />
							<SearchBarIcon src={searchBar} alt="search bar icon" />
						</SearchBarLabel>

						<ProductGrid>

							{
								allProducts.map((product, index) => {
									return (
										<ProductContainer>
											<FavouriteButton onClick={() => { handleLikeClick(product.productInfo.id) }}>
												<FavouriteIcon src={product.isLiked ? heartFull : heartEmpty} alt="add to favourites" />
											</FavouriteButton>
											<Link key={index} to={`/productlistpage/${product.productInfo.id}`}>
												<Product key={product.productInfo.id} productProp={product.productInfo} />
											</Link>
										</ProductContainer>
									)
								})
							}
						</ProductGrid>
					</ProductDisplay>
				</ListContainer>

				<PaginationContainer>
					<PaginationButton value={1} onClick={(event) => setPage(event.target.value)}>1</PaginationButton>
					<PaginationButton value={2} onClick={(event) => setPage(event.target.value)}>2</PaginationButton>
					<PaginationButton value={3} onClick={(event) => setPage(event.target.value)}>3</PaginationButton>
				</PaginationContainer>
			</MainLayout>
			<Footer />
		</>
	);
}

export default ProductListPage;
