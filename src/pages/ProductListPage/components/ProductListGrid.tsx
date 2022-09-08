import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Product from "../../../components/Product/Product";
import { LikedProduct } from "../../../types/product";

import heartEmpty from "../../../assets/heart-empty.png";
import heartFull from "../../../assets/heart-full.png";

const ProductGrid = styled.div`
    width: 100%;
	margin-top: 20px;
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 20px;
	
	@media (max-width: 650px) {
		justify-content: center;
	}
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

export const ProductListGrid = ({allProducts, handleLikeClick} : {allProducts: LikedProduct[], handleLikeClick: (productId: number) => void}) =>
    <ProductGrid>
    {
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
    }
</ProductGrid>