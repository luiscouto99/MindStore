// @ts-nocheck
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

import Header from '../../components/Header/Header'
import QuantityButton from '../../components/QuantityButton/QuantityButton';
import RenderRating from '../../components/RenderRating/RenderRating';
import { ButtonLink } from "../../components/Layout/Layout";

import arrowLeft from '../../assets/arrow-left.png'
import "./productDetail.css"

function ProductDetailPage() {
    const { id: productId } = useParams();
    const [productData, setProductData] = useState(null);
    const [productsToAdd, setProductsToAdd] = useState(1);

    const userId = localStorage.getItem('Id');

    useEffect(() => {
        const fetchById = async (desiredId) => {
            const response = await fetch(`/api/v1/users/products/${desiredId}`);
            const productData = await response.json();

            setProductData(productData);
        };
        fetchById(productId);
    }, [productId]);


    function handleAddToUserCart(quantity) {
        setProductsToAdd(quantity);
    }

    async function handleAddToUserCartFetch() {
        const productId = productData.id;
        const request = {
            method: "PATCH",
            headers: { "Content-Type": "application/json", "Authorization": localStorage.getItem("token") },
        };

        // nao devia ser assim, a api devia aceitar a quantidade e por omissao quando nao se envia quantidade devia assumir 1
        for (let i = 0; i < productsToAdd; i++) {
            const response = await fetch(`/api/v1/users/addtocart?userid=${userId}&productid=${productId}`, request);
            const json = await response.json();
            console.log("product added to user cart", json);
        }
    }

    return (
        <div>
            <Header />

            {productData && (
                <div className="product-detail_container">
                    <img src={productData.image} alt="" className='product-detail_image' />


                    <div className="product-detail_body">
                        <Link to="/productlistpage" className='product-detail_link'>
                            <img src={arrowLeft} alt="" />
                            <span>&nbsp; Back to Product List</span>
                        </Link>

                        <p className='product-detail_category'>{productData.category}</p>
                        <h1 className='product-detail_title'>{productData.title}</h1>

                        <RenderRating productRating={productData.rating} />

                        <p className="product-detail_price">{productData.price}€</p>

                        <p className='product-detail_description'>{productData.description}</p>

                        <div className="product-detail_cart-options">
                            <QuantityButton quantity={productsToAdd} handleAddToUserCart={handleAddToUserCart} />

                            <ButtonLink to={`/cart/${userId}`} onClick={handleAddToUserCartFetch}>Add to Cart</ButtonLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetailPage;