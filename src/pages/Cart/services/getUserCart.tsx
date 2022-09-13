// @ts-nocheck
export const getUserCart = async (id, setCartEmpty, setAllProducts) => {
    const request = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        },
    };

    const response = await fetch(`/api/v1/users/shoppingcart/${id}`, request);
    const products = await response.json();
    if (products.length === 0) {
        setCartEmpty(true);
    } else {
        setCartEmpty(false);
    }
    setAllProducts(products);
}