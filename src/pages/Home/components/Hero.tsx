import { ButtonLink } from "../../../components/Layout/Layout";

import styled from "styled-components/macro";

import heroImg from "../../../assets/heroImg.jpg";

const HeroContainer = styled.section`
    margin: 84px 40px;
    padding: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 820px) {
        margin-top: 40px;
        flex-direction: column-reverse;
        gap: 20px;
    }
`;

const HeroBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 80px;
    font-family: "Prata", serif;

    @media (max-width: 1100px) {
        margin-left: 0;
    }

    @media (max-width: 820px) {
        width: 100%;

        & a {
            margin: 0 auto;
        }
    }
`;

const HeroBodyTitle = styled.h1`
    font-size: 64px;
    font-weight: normal;

    @media (max-width: 1300px) {
        font-size: 56px;
    }

    @media (max-width: 1100px) {
        font-size: 42px;
    }

    @media (max-width: 995px) {
        font-size: 36px;
        margin-bottom: 0;
        margin-top: 20px;
    }
`;

const HeroBodyDescription = styled.p`
    font-size: 20px;
    margin-bottom: 80px;

    @media (max-width: 1300px) {
        font-size: 18px;
    }

    @media (max-width: 1100px) {
        font-size: 16px;
    }

    @media (max-width: 995px) {
        font-size: 16px;
        margin-bottom: 60px;
    }

`;

const HeroImage = styled.img`
    @media (max-width: 820px) {
        width: 100%;
    }
`;


export const Hero = () =>
    <HeroContainer>
        <HeroBody>
            <HeroBodyTitle>On Sale <i>-50%</i></HeroBodyTitle>
            <HeroBodyDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta saepe et dolorem corporis numquam? Quaerat quod quae sapiente ullam magnam consequuntur recusandae? Iste enim reprehenderit voluptatem ex laudantium ut?
            </HeroBodyDescription>
            <ButtonLink to="/productlistpage">View Products</ButtonLink>
        </HeroBody>

        <HeroImage src={heroImg} alt="single product display" />
    </HeroContainer>