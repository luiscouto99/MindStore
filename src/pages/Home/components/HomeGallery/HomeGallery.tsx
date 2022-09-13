// @ts-nocheck

import { Link } from "react-router-dom";

import Product from "../../../../components/Product/Product";
import { ProductSkeleton } from "../../../../components/ProductSkeleton/ProductSkeleton";

import type { Product as ProductType } from "../../../../types/product";

import styled from "styled-components/macro";

const ProductGallery = styled.section`
    margin: 80px 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 440px);
    grid-gap: 20px;
    justify-content: center;
`;

const ProductContainer = styled(Link)`
    background-color: white;
    border-radius: 4px;
    padding: 40px 20px 20px 20px;
`;

export const HomeGallery = ({ allProducts, isLoading }: { allProducts: ProductType[], isLoading: boolean }) =>
    <ProductGallery>
        {
            isLoading ? (
                <ProductSkeleton amount={3} width={440} height={460} />
            ) : (
                allProducts.slice(0, 3).map((product: ProductType, index: number) => {
                    return (
                        <ProductContainer key={index} to={`/productlistpage/${product.id}`}>
                            <Product key={product.id} productProp={product} />
                        </ProductContainer>
                    )
                })
            )
        }
    </ProductGallery>