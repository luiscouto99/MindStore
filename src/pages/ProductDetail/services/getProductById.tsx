export const getProductById = async (productId: string | undefined) => {
  const response = await fetch(`/api/v1/users/products/${productId}`);
  const json = await response.json();
  return json;
};
