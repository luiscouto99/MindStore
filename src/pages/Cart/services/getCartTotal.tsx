// @ts-nocheck
export const getCartTotal = async (id, setTotal) => {
    const request = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token")
        },
    };

    const response = await fetch(`/api/v1/users/shoppingcart/price/${id}`, request);
    const text = await response.text();
    const removeEuroSymbol = text.split("€");
    const finalPrice = Number(removeEuroSymbol[0]);
    const roundedTotal = Math.round((finalPrice + Number.EPSILON) * 100) / 100;
    setTotal(roundedTotal);
}