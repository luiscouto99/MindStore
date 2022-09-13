export const getProductById = async (productId: number, setProductData:(value: React.SetStateAction<null>) => void) => {
    const response = await fetch(`/api/v1/users/products/${productId}`);
    const productData = await response.json();
    setProductData(productData);
}