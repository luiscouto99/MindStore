// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import { MainLayout } from "../../components/Layout/Layout";
import { ProductListGrid } from "./components/ProductListGrid/ProductListGrid";
import { Pagination } from "./components/Pagination/Pagination";

import type { LikedProduct, ProductListSorting } from "../../types/product";

import { getAllProducts } from "./services/getAllProducts";
import { getSearchedItems } from "./services/getSearchedItems";

import styled from "styled-components/macro";

const ListContainer = styled.section`
    display: flex;
    flex-direction: row;
	margin-top: 84px;

	@media (max-width: 650px) {
		display: flex;
        flex-direction: column;
	}
`;

const ProductDisplay = styled.div`
	margin-left: 25%;
	display: flex;
    align-items: center;
    justify-content: center;
	width: 80%;

	@media (max-width: 930px) {
		margin-left: 30%;
	}

	@media (max-width: 650px) {
		width: 100%;
		margin-left: 0;
	}
`;

const EmptyProductSearch = styled.h1`
	font-size:30px;
	font-weight: 400;
	margin: 0;
`;

function ProductListPage() {
	const [allProducts, setAllProducts] = useState([] as LikedProduct[]);
	const [sort, setSort] = useState("ASC");
	const [link, setLink] = useState("?field=title&pagesize=12&direction=");
	const [page, setPage] = useState("1");
	const [isLoading, setIsLoading] = useState(true);
	const [itemsFromSearch, setItemsFromSearch] = useState(null);
	const inputSearch = useRef("");

	useEffect(() => {
		getAllProducts(link, sort, page, setAllProducts);
		setTimeout(() => setIsLoading(false), 2000);
	}, [link, sort, page]);

	function handleLikeClick(productId: number) {
		const likedProducts = [...allProducts];

		likedProducts.forEach((product) => {
			if (product.id === productId) {
				product.isLiked = !product.isLiked;
			}
		});
		setAllProducts(likedProducts);
	};

	function handleSearchBar() {
		setIsLoading(true);
		getSearchedItems(inputSearch, setIsLoading, setItemsFromSearch, setAllProducts);
	}

	return (
		<>
			<Header />
			<MainLayout>
				<ListContainer>
					<Sidebar className="sidebar" handleSortFetch={(direction: ProductListSorting) => setSort(direction)} handleCategoryFetch={(link: string) => setLink(link)} handlePriceFetch={(link: string) => setLink(link)} handleRatingFetch={(link: string) => setLink(link)} inputSearch={inputSearch} handleSearchBar={handleSearchBar} />
					<ProductDisplay>
						{
							allProducts.length === 0 && !isLoading ? (
								<EmptyProductSearch>No products found with name: "{inputSearch.current.value}"</EmptyProductSearch>
							) : (
								<ProductListGrid allProducts={allProducts} handleLikeClick={handleLikeClick} isLoading={isLoading} />
							) 
						}
					</ProductDisplay>
				</ListContainer>
				<Pagination setPage={setPage} />
			</MainLayout>
			<Footer />
		</>
	);
}

export default ProductListPage;
