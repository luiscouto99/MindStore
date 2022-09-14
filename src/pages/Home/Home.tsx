import { useEffect, useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import { MainLayout } from "../../components/Layout/Layout";
import { Hero } from "./components/Hero";
import { HomeBanner } from "./components/HomeBanner"
import { HomeGallery } from "./components/HomeGallery/HomeGallery";

import { getAllProducts } from "../../services/getAllProducts";

function Home() {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getHomeProducts = async() => {
            const productRequest = getAllProducts("/api/v1/users/products");
            const products = await productRequest({
                method: "GET",
                authorization: localStorage.getItem("token") || "",
                requestString: "?direction=ASC&field=id&page=5&pagesize=3"
            })
            console.log(products);
            setAllProducts(products);
        }
        getHomeProducts();
        setTimeout(() => setIsLoading(false), 2000);
    }, []);

    return (
        <>
            <Header />
            <MainLayout>
                <Hero />
                <HomeGallery allProducts={allProducts} isLoading={isLoading} />
                <HomeBanner />
            </MainLayout>
            <Footer />
        </>
    )
}

export default Home