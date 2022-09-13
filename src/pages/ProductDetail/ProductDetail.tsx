// @ts-nocheck
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";

import { ProductDisplay } from "./components/ProductDisplay";
import { MainLayout } from "../../components/Layout/Layout";

import { getProductById } from "./services/getProductById";
import { addToUserCart } from "./services/addToUserCart";

function ProductDetailPage() {
    const { id: productId } = useParams();
    const [productData, setProductData] = useState(null);
    const [productsToAdd, setProductsToAdd] = useState(1);

    const userId = localStorage.getItem('Id');

    useEffect(() => {
        getProductById(productId, setProductData);
    }, [productId]);


    function handleAddToUserCart(quantity) {
        setProductsToAdd(quantity);
    }

    function handleAddToUserCartFetch() {
        addToUserCart(productData, productsToAdd, userId);
    }

    return (
        <MainLayout>
            <Header />
            <ProductDisplay productsToAdd={productsToAdd} productData={productData} userId={userId} handleAddToUserCart={handleAddToUserCart} handleAddToUserCartFetch={handleAddToUserCartFetch} />
            <Footer />
        </MainLayout>
    )
}

export default ProductDetailPage;