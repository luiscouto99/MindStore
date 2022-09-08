import styled from "styled-components/macro";
import { Button } from "../../../components/Layout/Layout";

const CartForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    margin-top: 40px;	
    width: 100%;
`;

const CartFormLabel = styled.label`
    width: 100%;
    margin-bottom: 16px;
`;

const CartFormInput = styled.input`
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

export const Form = ({handleCheckout, fullName, phoneNumber, email, address} : {handleCheckout: (event: any) => void, fullName: string, phoneNumber: string, email: string, address: string}) =>
    <CartForm onSubmit={handleCheckout}>
        <CartFormLabel htmlFor="full-name">
            {/* @ts-ignore-next-line */}
            <CartFormInput type="text" name="full-name" ref={fullName} placeholder="Full Name" />
        </CartFormLabel>

        <CartFormLabel htmlFor="phone-number">
            {/* @ts-ignore-next-line */}
            <CartFormInput type="text" name="phone-number" ref={phoneNumber} placeholder="Phone Number" />
        </CartFormLabel>

        <CartFormLabel htmlFor="email">
            {/* @ts-ignore-next-line */}
            <CartFormInput type="text" name="email" ref={email} placeholder="Email" />
        </CartFormLabel>

        <CartFormLabel htmlFor="address">
            {/* @ts-ignore-next-line */}
            <CartFormInput type="text" name="address" ref={address} placeholder="Address" />
        </CartFormLabel>

        <Button type="submit">Checkout</Button>
    </CartForm>