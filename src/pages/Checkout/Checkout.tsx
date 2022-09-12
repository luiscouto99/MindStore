// @ts-nocheck
import { useRef, useState } from 'react';
import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";

import styled, { css } from "styled-components/macro";
import { Button, ButtonLink, CredentialsForm, CredentialsLabel, CredentialsInput } from "../../components/Layout/Layout";

import arrowLeft from "../../assets/arrow-left.png"

const CheckoutContainer = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 40px;
    gap: 20px;

    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

const Card = styled.section`
    background: linear-gradient(283.38deg, #BCBCBC 6.57%, rgba(188, 188, 188, 0) 221.12%);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    width: 40%;
    height: 380px;

    @media (max-width: 1200px) {
        width: 540px;
    }

    @media (max-width: 640px) {
        display:none;
    }
`;

const CardNumberContainer = styled.div`
    margin-top: 100px;
    margin-bottom: 20px;
`;

const CardPlaceholder = styled.p`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
`;

const CardInputText = styled.p`
    margin: 0;

    ${(props) => props.number && css`
        color: white;
        font-size: 24px;
    `}
`;

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: bottom;
    color: white;
    font-size: 18px;
    margin-bottom: 20px;
`;

const CardInfoContainer = styled.div`
`;

const CheckoutFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    width: 45%;

    @media (max-width: 1200px) {
        width: 540px;
    }

    @media (max-width: 640px) {
        width: 100%;
    }
`;

const FormContainerTitle = styled.h2`
    margin-bottom: 72px;
    padding-bottom: 8px;
    font-size: 30px;
    font-weight: 300;
    border-bottom: 1px solid #999999;
`;

const FormInputTitle = styled.span`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.3);
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
    margin-bottom: 80px;

    @media (max-width: 443px) {
        flex-direction: column;
    }
`;

function Checkout() {
    const name = useRef("");
    const number = useRef("");
    const date = useRef("");
    const cvv = useRef("");
    const [rerender, setRerender] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log(number.current.value)
    }

    function handleInputTyped() {
        setRerender(!rerender);

        if (number.current.value.split(/[-\s]+/).join("").length === 4 || number.current.value.split(/[-\s]+/).join("").length === 8 || number.current.value.split(/[-\s]+/).join("").length === 12) {
            number.current.value += " - ";
        }

        if (date.current.value.length === 2) {
            date.current.value += " / ";
        }
    }

    return (
        <>
            <Header />
            <CheckoutContainer>
                <Card>
                    <CardNumberContainer>
                        <CardPlaceholder>Card Number</CardPlaceholder>
                        <CardInputText number>{number.current.value}</CardInputText>
                    </CardNumberContainer>

                    <CardInfo>
                        <CardInfoContainer>
                            <CardPlaceholder>Name</CardPlaceholder>
                            <CardInputText>{name.current.value}</CardInputText>
                        </CardInfoContainer>

                        <CardInfoContainer>
                            <CardPlaceholder>Exp Date</CardPlaceholder>
                            <CardInputText>{date.current.value}</CardInputText>
                        </CardInfoContainer>

                        <CardInfoContainer>
                            <CardPlaceholder>CVV</CardPlaceholder>
                            <CardInputText>{cvv.current.value}</CardInputText>
                        </CardInfoContainer>
                    </CardInfo>
                </Card>

                <CheckoutFormContainer>
                    <FormContainerTitle>Payment Details</FormContainerTitle>

                    <CredentialsForm checkoutForm onSubmit={handleSubmit}>
                        <CredentialsLabel htmlFor="number">
                            <FormInputTitle>Card Number</FormInputTitle>
                            <CredentialsInput type="text" placeholder='4242 4242 4242 4242' maxLength={25} ref={number} onChange={handleInputTyped} />
                        </CredentialsLabel>

                        <CredentialsLabel htmlFor="name">
                            <FormInputTitle>Cardholder Name</FormInputTitle>
                            <CredentialsInput type="text" placeholder='Joaquim Alberto' maxLength={18} ref={name} onChange={handleInputTyped} />
                        </CredentialsLabel>


                        <CredentialsLabel htmlFor="date">
                            <FormInputTitle>Exp Date</FormInputTitle>
                            <CredentialsInput type="text" placeholder='07 / 2026' maxLength={9} ref={date} onChange={handleInputTyped} />
                        </CredentialsLabel>

                        <CredentialsLabel htmlFor="cvv">
                            <FormInputTitle>CVV</FormInputTitle>
                            <CredentialsInput type="text" placeholder='424' maxLength={3} ref={cvv} onChange={handleInputTyped} />
                        </CredentialsLabel>

                        <ButtonContainer>
                            <ButtonLink to="/cart" secondary>Cancel</ButtonLink>
                            <Button type='submit'>Accept Payment</Button>
                        </ButtonContainer>
                    </CredentialsForm>

                    <Link to="/cart" className='product-detail_link'>
                        <img src={arrowLeft} alt="" />
                        <span>&nbsp; Back to Product List</span>
                    </Link>
                </CheckoutFormContainer>
            </CheckoutContainer>
        </>
    )
}

export default Checkout;