export const getProductById = async (productId: number) => {
    const response = await fetch(`/api/v1/users/products/${productId}`);
    const json = await response.json();
    return json;
}