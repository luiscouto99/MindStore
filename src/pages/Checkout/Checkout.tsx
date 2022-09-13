// @ts-nocheck
import { useRef, useState } from 'react';

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Card } from "./components/Card";
import { CheckoutForm } from "./components/CheckoutForm";

import styled from "styled-components/macro";

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
                <Card number={number} name={name} date={date} cvv={cvv} />
                <CheckoutForm handleSubmit={handleSubmit} handleInputTyped={handleInputTyped} number={number} name={name} date={date} cvv={cvv} />
            </CheckoutContainer>
            <Footer />
        </>
    )
}

export default Checkout;