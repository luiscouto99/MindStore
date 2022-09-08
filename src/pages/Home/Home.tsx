import { useEffect, useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { MainLayout } from "../../components/Layout/Layout";
import { Hero } from "./components/Hero";
import { HomeBanner } from "./components/HomeBanner"
import { HomeGallery } from "./components/HomeGallery";

function Home() {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchAllProducts() {
            const response = await fetch("/api/v1/users/products?direction=ASC&field=id&page=5&pagesize=3");
            const json = await response.json();
            setAllProducts(json);
            setTimeout(() => setIsLoading(false), 2000);
        }
        fetchAllProducts();
    }, []);

    return (
        <>
            <Header />
            <MainLayout>
                <Hero></Hero>
                <HomeGallery allProducts={allProducts} isLoading={isLoading}></HomeGallery>
                <HomeBanner></HomeBanner>
            </MainLayout>
            <Footer />
        </>
    )
}

export default Home