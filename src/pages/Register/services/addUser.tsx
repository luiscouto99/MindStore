export const addUser = async ({
  firstName,
  lastName,
  email,
  password,
  dateOfBirth,
  address,
}: {
  firstName: React.MutableRefObject<HTMLInputElement | null>;
  lastName: React.MutableRefObject<HTMLInputElement | null>;
  email: React.MutableRefObject<HTMLInputElement | null>;
  password: React.MutableRefObject<HTMLInputElement | null>;
  dateOfBirth: React.MutableRefObject<HTMLInputElement | null>;
  address: React.MutableRefObject<HTMLInputElement | null>;
}) => {
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: (firstName.current as HTMLInputElement).value,
      lastName: (lastName.current as HTMLInputElement).value,
      email: (email.current as HTMLInputElement).value,
      password: (password.current as HTMLInputElement).value,
      dateOfBirth: (dateOfBirth.current as HTMLInputElement).value,
      address: (address.current as HTMLInputElement).value,
    }),
  };
  const response = await fetch(`/api/v1/users`, request);
  return response;
};
