import { ButtonLink } from "../../../components/Layout/Layout";

import styled from "styled-components/macro";

import bannerImg from "../../../assets/bannerImg.jpg";

const Banner = styled.section`
    margin: 80px 20%;
    padding: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1300px) {
        width: 440px;
        margin: 0 auto 80px;
        padding: 20px;
        flex-direction: column-reverse;
        align-items: center;
        gap: 20px;
    }
`;

const BannerBody = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 1300px) {
        align-items: center;
    }
`;

const BannerBodyTitle = styled.h2`
    font-family: "Prata", serif;
    font-size: 40px;
    font-weight: normal;
    font-style: italic;
`;

const BannerImage = styled.img`
    width: 60%;

    @media (max-width: 1300px) {
        width: 100%;
    }
`;

export const HomeBanner = () =>
    <Banner>
        <BannerBody>
            <BannerBodyTitle>Trending Now</BannerBodyTitle>
            <ButtonLink to="/productlistpage">View Products</ButtonLink>
        </BannerBody>
        <BannerImage src={bannerImg} alt="banner image" />
    </Banner>