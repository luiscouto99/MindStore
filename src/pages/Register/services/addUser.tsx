export const addUser = async ({
  firstName,
  lastName,
  email,
  password,
  dateOfBirth,
  address,
}: {
  firstName: React.MutableRefObject<HTMLInputElement>;
  lastName: React.MutableRefObject<HTMLInputElement>;
  email: React.MutableRefObject<HTMLInputElement>;
  password: React.MutableRefObject<HTMLInputElement>;
  dateOfBirth: React.MutableRefObject<HTMLInputElement>;
  address: React.MutableRefObject<HTMLInputElement>;
}) => {
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
      dateOfBirth: dateOfBirth.current.value,
      address: address.current.value,
    }),
  };
  const response = await fetch(`/api/v1/users`, request);
  return response;
};
