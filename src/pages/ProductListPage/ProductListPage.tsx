// @ts-nocheck

import React, { useState, useEffect, useRef } from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MainLayout } from "../../components/Layout/Layout";
import { SearchBar } from "./components/SearchBar";
import { ProductListGrid } from "./components/ProductListGrid";
import { Pagination } from "./components/Pagination";
import type { LikedProduct, Product as ProductType, ProductListSorting } from "../../types/product";

import styled from "styled-components/macro";

const ListContainer = styled.section`
    display: flex;
    flex-direction: row;

	@media (max-width: 650px) {
		display: flex;
        flex-direction: column;
	}
`;

const ProductDisplay = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;

	@media (max-width: 650px) {
		width: 100%
	}
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
		async function fetchAllProducts() {
			const response = await fetch(`/api/v1/users/products${link}${sort}&page=${page}`);
			const products: ProductType[] = await response.json();

			const likedArr: LikedProduct[] = products.map((product) => {
				const obj = {
					// destruturamos o product e injetamos o isLiked
					// assim o objeto retornado e uma replica do product com a propriedade extra
					...product,
					isLiked: false,
				}
				return obj;
			});
			setAllProducts(likedArr);
		}
		fetchAllProducts();
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

	async function handleSearchBar() {
		setIsLoading(true);

		const response = await fetch(`/api/v1/users/products/name?title=${(inputSearch as unknown as React.RefObject<HTMLInputElement>).current?.value}&page=1&pagesize=6`);
		if (response.status === 404) {
			setIsLoading(false);
			setItemsFromSearch(`No results found for the search: "${inputSearch.current.value}"`);
			setAllProducts([{}]); // se nao tiver isto devolve o fetch inicial
			// setInterval(() => inputSearch = "", 3000);
			return;
		}
		const json = await response.json();
		setAllProducts(json);
		setIsLoading(false);
	}

	return (
		<>
			<Header />
			<MainLayout>
				<ListContainer>
					<Sidebar className="sidebar" handleSortFetch={(direction: ProductListSorting) => setSort(direction)} handleCategoryFetch={() => setLink(link)} handlePriceFetch={(link: string) => setLink(link)} handleRatingFetch={(link: string) => setLink(link)} />
					<ProductDisplay>
						<SearchBar inputSearch={inputSearch} handleSearchBar={handleSearchBar} />
						{itemsFromSearch !== "" ? <p>{itemsFromSearch}</p> : null}
						<ProductListGrid allProducts={allProducts} handleLikeClick={handleLikeClick} isLoading={isLoading} />
					</ProductDisplay>
				</ListContainer>
				<Pagination setPage={setPage} />
			</MainLayout>
			<Footer />
		</>
	);
}

export default ProductListPage;
