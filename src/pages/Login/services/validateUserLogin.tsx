export const validateUserLogin = async (
  email: React.MutableRefObject<HTMLInputElement>,
  password: React.MutableRefObject<HTMLInputElement>,
) => {
  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email.current.value, password: password.current.value }),
  };

  const response = await fetch('/login', request);
  return response;
};
