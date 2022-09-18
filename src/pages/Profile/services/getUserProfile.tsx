export const getUserProfile = async (fetchedId: string | null) => {
  const request = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token') || '',
    },
  };

  const response = await fetch(`/api/v1/users/${fetchedId}`, request);
  const json = await response.json();
  return json;
};
