import styled from "styled-components/macro";
import { Button } from "../../../components/Layout/Layout";

const CartDiscountForm = styled.div`
	display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #e9e9e9;
    padding: 30px;
    margin: 25px 0;
`;

const CartDiscountInput = styled.input`
	background-color: white;
    border: none;
    border-radius: 4px;
    padding: 13px 5px 13px 10px;
    width: 100%;
    font-family: "Roboto", sansserif;
    transition: ease-in-out 0.2s;	

	&::placeholder {
		color:rgb(163, 163, 163);
	}

	&:focus {
		outline: none;
    	box-shadow: -1px 6px 10px 0 rgba(119, 119, 119, 0.15);
	}
`;

const CartDiscountLabel = styled.label`
    width: 50%;
`;

export const Discount = ({handleDiscount, discountCode} : {handleDiscount: (event: any) => void, discountCode: string}) =>
    <CartDiscountForm className="discount-container-form" onSubmit={handleDiscount}>
        <CartDiscountLabel htmlFor="discount-code">
            {/* @ts-ignore-next-line */}
            <CartDiscountInput type="text" name="discount-code" ref={discountCode} placeholder="Enter discount code" />
        </CartDiscountLabel>

        <Button noMargin type="submit">Submit</Button>
    </CartDiscountForm>