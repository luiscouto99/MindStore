import { getCartTotal } from './getCartTotal';

export const deleteItemFromCart = async (id: string | undefined, productId: number) => {
  const request = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token') || '',
    },
  };

  const response = await fetch(
    `/api/v1/users/removefromcart?userid=${id}&productid=${productId}`,
    request,
  );
  const json = await response.json();
  getCartTotal(id);
  return json;
};
