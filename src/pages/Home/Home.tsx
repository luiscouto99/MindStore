// @ts-nocheck
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Product from "../../components/Product/Product";
import { Button } from "../../styled/Styled";

import bannerImg from "../../assets/bannerImg.jpg";
import heroImg from "../../assets/heroImg.jpg";

import styled from "styled-components";

const HeroContainer = styled.div`
    margin: 84px 40px;
    padding: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

const HeroBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 80px;
    font-family: "Prata", serif;
`;

const HeroBodyTitle = styled.h1`
    font-size: 64px;
    font-weight: normal;
`;

const HeroBodyDescription = styled.p`
    font-size: 20px;
    margin-bottom: 80px;
`;

// const Button = styled(Link)`
//     background-color: var(--primary-color);
//     color: white;
//     padding: 16px 0;
//     font-family: 'Roboto', sans-serif;
//     font-size: 16px;
//     font-weight: 500;
//     text-align: center;
//     width: 220px;
//     cursor: pointer;
//     transition: 0.3s ease-in-out;

//     &:hover {
//         box-shadow: -1px 6px 10px 0 rgba(120, 60, 20, .15);
//     }
// `;

const HeroImage = styled.img`

`;

const ProductGallery = styled.div`
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

const Banner = styled.div`
    margin: 80px 20%;
    padding: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BannerBody = styled.div`
    display: flex;
    flex-direction: column;
`;

const BannerBodyTitle = styled.h2`
    font-family: "Prata", serif;
    font-size: 40px;
    font-weight: normal;
    font-style: italic;
`;

const BannerImage = styled.img`
    width: 60%;
`;

const HomePage = styled.section`
    @media (max-width: 1300px) {
        ${HeroBodyTitle} {
            font-size: 56px;
        }

        ${HeroBodyDescription} {
            font-size: 16px;
        }

        ${BannerBody} {
            align-items: center;
        }

        ${Banner} {
            width: 440px;
            margin: 0 auto;
            margin-bottom: 80px;
            padding: 20px;
            background-color: white;
            display: flex;
            justify-content: space-between;
            flex-direction: column-reverse;
            align-items: center;
            gap: 20px;
        }

        ${BannerImage} {
            width: 100%;
        }
    }

    @media (max-width: 1100px) {
        ${HeroBody} {
            margin-left: 0;
        }   
            
        ${HeroBodyTitle} {
            font-size: 42px;
        }

        ${HeroBodyDescription} {
            font-size: 18px;
        }
    }

    @media (max-width: 995px) {
        ${HeroBodyTitle} {
            font-size: 36px;
            margin-bottom: 0;
            margin-top: 20px;
        }
        
        ${HeroBodyDescription} {
            font-size: 16px;
            margin-bottom: 60px;
        }
    }

    @media (max-width: 820px) {
        ${HeroContainer} {
            margin-top: 40px;
            flex-direction: column-reverse;
            gap: 20px;
        }

        ${HeroImage} {
            width: 100%;
        }

        ${HeroBody} {
            width: 100%;
        }

        ${Button} {
            margin: 0 auto;
        }
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
            <HomePage>
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
            </HomePage>

            <Footer />
        </>
    )
}

export default Home