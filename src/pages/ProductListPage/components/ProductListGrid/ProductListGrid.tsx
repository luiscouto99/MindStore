// @ts-nocheck
import { Link } from "react-router-dom";

import Product from "../../../../components/Product/Product";
import { ProductSkeleton } from "../../../../components/ProductSkeleton/ProductSkeleton";
import styled from "styled-components/macro";
import { ProductContainer } from "./ProductContainer"

import heartEmpty from "../../../../assets/heart-empty.png";
import heartFull from "../../../../assets/heart-full.png";

import { LikedProduct } from "../../../types/product";

export const ProductGrid = styled.div`
    width: 100%;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 20px;
    justify-content: center;
	
	@media (max-width: 650px) {
		justify-content: center;
	}
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

export const ProductListGrid = ({ allProducts, handleLikeClick, isLoading }: { allProducts: LikedProduct[], handleLikeClick: (productId: number) => void, isLoading: boolean }) =>
    <ProductGrid>
        {
            isLoading ? (
                <ProductSkeleton amount={8} height={400} />
            ) : (
                allProducts.map((product) => {
                    return (
                        <ProductContainer key={`product-container-${product.id}`}>
                            <FavouriteButton onClick={() => { handleLikeClick(product.id) }}>
                                <FavouriteIcon src={product.isLiked ? heartFull : heartEmpty} alt="add to favourites" />
                            </FavouriteButton>
                            <Link to={`/productlistpage/${product.id}`}>
                                <Product key={product.id} productProp={product} />
                            </Link>
                        </ProductContainer>
                    )
                })
            )
        }
    </ProductGrid>