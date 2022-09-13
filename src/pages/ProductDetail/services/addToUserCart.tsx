// @ts-nocheck
import { Product } from "../../../types/product";

export const addToUserCart = async (productData: Product, productsToAdd: number, userId: number) => {
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