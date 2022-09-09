import CheckoutProduct from '../../../components/CheckoutProduct/CheckoutProduct';

import styled from "styled-components/macro";

import { Product } from "../../../types/product";

const CartProductList = styled.div`
	margin-top: 40px;
    margin-bottom: 50px;
`;

export const CartProduct = ({allProducts, handleRemove} : {allProducts: Product[], handleRemove: (productId: number) => void}) =>
    <CartProductList>
        {
            allProducts.map((product: Product) => {
                return (
                    <CheckoutProduct key={product.id} handleRemove={() => { handleRemove(product.id) }} product={product} />
                );
            })
        }
    </CartProductList>