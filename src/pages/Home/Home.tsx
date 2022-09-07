// @ts-nocheck
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Product from "../../components/Product/Product";
import { MainLayout, Button } from "../../components/Layout/Layout";

import bannerImg from "../../assets/bannerImg.jpg";
import heroImg from "../../assets/heroImg.jpg";

import styled from "styled-components";

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

function Home() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        async function fetchAllProducts() {
            const response = await fetch("/api/v1/users/products?direction=ASC&field=id&page=5&pagesize=3");
            const json = await response.json();
            setAllProducts(json);
        }
        fetchAllProducts();
    }, []);

    return (
        <>
            <Header />

            <MainLayout>

                <HeroContainer>
                    <HeroBody>
                        <HeroBodyTitle>On Sale <i>-50%</i></HeroBodyTitle>
                        <HeroBodyDescription>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta saepe et dolorem corporis numquam? Quaerat quod quae sapiente ullam magnam consequuntur recusandae? Iste enim reprehenderit voluptatem ex laudantium ut?
                        </HeroBodyDescription>
                        <Button to="/productlistpage">View Products</Button>
                    </HeroBody>

                    <HeroImage src={heroImg} alt="single product display" />
                </HeroContainer>

                <ProductGallery>
                    {
                        allProducts.slice(0, 3).map((product, index) => {
                            return (
                                <ProductContainer key={index} to={`/productlistpage/${product.id}`}>
                                    <Product key={product.id} productProp={product} />
                                </ProductContainer>
                            )
                        })
                    }
                </ProductGallery>

                <Banner>
                    <BannerBody>
                        <BannerBodyTitle>Trending Now</BannerBodyTitle>
                        <Button to="/productlistpage">View Products</Button>
                    </BannerBody>
                    <BannerImage src={bannerImg} alt="banner image" />
                </Banner>

            </MainLayout>

            <Footer />
        </>
    )
}

export default Home