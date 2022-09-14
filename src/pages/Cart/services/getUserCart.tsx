export const getUserCart = async (userId: string | undefined) => {
    const request = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token") || ""
        },
    };

    const response = await fetch(`/api/v1/users/shoppingcart/${userId}`, request);
    const json = await response.json();
    return json;
}