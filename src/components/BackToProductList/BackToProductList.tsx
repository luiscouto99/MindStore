import { Link } from "react-router-dom";

import leftArrow from "../../assets/arrow-left.png";

import styled from "styled-components/macro";

const CartGoBack = styled(Link)`
	font-weight: 400;
    margin-bottom: 30px;
`;

const CartGoBackIcon = styled.img`
`;

const CartGoBackText = styled.span`
`;

export const BackToProductList = () =>
    <CartGoBack to="/productlistpage">
        <CartGoBackIcon src={leftArrow} alt="left arrow to go to list page" />
        <CartGoBackText>&nbsp; Back to Product List</CartGoBackText>
    </CartGoBack>