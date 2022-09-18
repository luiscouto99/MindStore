export const addToUserCart = async (
  productId: string | undefined,
  productsToAdd: number,
  userId: string | null,
) => {
  const totalProducts = [];

  const request = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token') || '',
    },
  };

  // nao devia ser assim, a api devia aceitar a quantidade e por omissao quando nao se envia quantidade devia assumir 1
  for (let i = 0; i < productsToAdd; i++) {
    const response = await fetch(
      `/api/v1/users/addtocart?userid=${userId}&productid=${productId}`,
      request,
    );
    const json = await response.json();
    totalProducts.push(json);
  }
  return totalProducts;
};
