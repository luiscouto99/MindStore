import { UpdatedUser } from '../../../types/user';

export const updateUserProfile = async (
  profileData: UpdatedUser,
  fetchedId: string | null,
  fetchedToken: string | null,
) => {
  const request = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: fetchedToken || '',
    },
    body: JSON.stringify(profileData),
  };
  const response = await fetch(`/api/v1/users/${fetchedId}`, request);
  const json = await response.json();
  return {
    data: json,
    status: response.status,
  };
};
