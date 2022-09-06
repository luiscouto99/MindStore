// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Header from '../../components/Header/Header'
import QuantityButton from '../../components/QuantityButton/QuantityButton';
import RenderRating from '../../components/RenderRating/RenderRating';
import arrowLeft from '../../assets/arrow-left.png'
import "./productDetail.css"

function ProductDetailPage() {
    const { id } = useParams();
    const [productData, setProductData] = useState({});
    const [productRating, setProductRating] = useState({});
    let [productsToAdd, setProductsToAdd] = useState();

    const userId = localStorage.getItem('Id');

    useEffect(() => {
        async function fetchById() {
            const response = await fetch(`/api/v1/users/products/${id}`);
            const json = await response.json();
            setProductData(json);
            setProductRating(json.rating);
        }
        fetchById();
    }, []);


    function handleAddToUserCart(quantity) {
        console.log("product detail qty", quantity);
        const newValue = quantity;
        setProductsToAdd(newValue);
    }

    async function handleAddToUserCartFetch() {
        const productId = productData.id;
        const request = {
            method: "PATCH",
            headers: { "Content-Type": "application/json", "Authorization": localStorage.getItem("token") },
        };

        // martelada que funciona
        if (productsToAdd === undefined) { 
            productsToAdd = 1;
        }
        

        for (let i = 0; i < productsToAdd; i++) {
            const response = await fetch(`/api/v1/users/addtocart?userid=${userId}&productid=${productId}`, request);
            const json = await response.json();
            console.log("product added to user cart", json);
        }
    }

    return (
        <div>
            <Header />

            <div className="product-detail_container">
                <img src={productData.image} alt="" className='product-detail_image' />


                <div className="product-detail_body">
                    <Link to="/productlistpage" className='product-detail_link'>
                        <img src={arrowLeft} alt="" />
                        <span>&nbsp; Back to Product List</span>
                    </Link>

                    <p className='product-detail_category'>{productData.category}</p>
                    <h1 className='product-detail_title'>{productData.title}</h1>

                    <RenderRating productRating={productRating} />

                    <p className="product-detail_price">{productData.price}€</p>

                    <p className='product-detail_description'>{productData.description}</p>

                    <div className="product-detail_cart-options">
                        <QuantityButton handleAddToUserCart={handleAddToUserCart} />

                        <div>
                            <Link to={`/cart/${userId}`} className="product-detail_cart-button" onClick={handleAddToUserCartFetch}>Add to Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage;