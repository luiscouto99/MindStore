import styled from "styled-components/macro"

const CartSummaryPrice = styled.div`
`;

const CartSummaryTitle = styled.h2`
	margin: 0;
    margin-bottom: 12px;
    margin-top: 7px;
    font-size: 18px;
    font-weight: 400;
    border-bottom: 1px solid #999999;
    padding-bottom: 20px;
`;

const CartSummaryPriceDetails = styled.div`
	display: flex;
    justify-content: space-between;
`;

const CartSummaryPriceText = styled.p`
	margin-top: 27px;
    font-size: 18px;
`;

export const Price = ({ total } : {total: number}) =>
    <CartSummaryPrice>
        <CartSummaryTitle>Summary</CartSummaryTitle>
        <CartSummaryPriceDetails>
            <CartSummaryPriceText>Total:</CartSummaryPriceText>
            <CartSummaryPriceText data-testid="total">{total} €</CartSummaryPriceText>
        </CartSummaryPriceDetails>
    </CartSummaryPrice>

