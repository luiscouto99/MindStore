// @ts-nocheck

import { getCartTotal } from "./getCartTotal";

export const deleteItemFromCart = async (setAllProducts, setCartEmpty, id, productId, setTotal) => {
    console.log(id)
    const request = {
        method: "PATCH",
        headers: {

            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        },
    };

    const response = await fetch(`/api/v1/users/removefromcart?userid=${id}&productid=${productId}`, request);
    const json = await response.json();
    const finalProducts = json;
    setAllProducts(finalProducts);
    getCartTotal(id, setTotal);

    setCartEmpty(finalProducts.length === 0);
}