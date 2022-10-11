// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useRef, useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { LoginForm } from './components/LoginForm';

import { validateUserLogin } from './services/validateUserLogin';

function Login() {
  const email = useRef('');
  const password = useRef('');

  const [message, setMessage] = useState<string | null>(null);
  const [loginSuccessful, setLoginSuccessful] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await validateUserLogin(email, password);

    if (response.status === 200) {
      setMessage('Login successful');
      const givenToken = response.headers.get('Authorization');
      const givenId = response.headers.get('Id');

      // estes dois behaviours sao as possibilidades que existem caso haja falha a obter os valores, cabe-me a mim decidir qual a melhor approach
      // se existir coloco o que tem, se nao existir nao coloco nada
      givenToken && localStorage.setItem('token', givenToken);
      // se nao exisitir giveId coloco ""
      localStorage.setItem('Id', givenId || '');
      localStorage.setItem(
        'adminToken',
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6ZXRvQGVtYWlsLmNvbSIsImV4cCI6MTY2MTQyOTUyNH0.t9eLz6j70whrt17ea3DYrs7o96AVVKy93_EsS762IK9KjxVf-tCF2Cz1KPf0V1c-iOvbvQQy0fHvW25N-_Eb-Q',
      );

      setLoginSuccessful(true);
    } else {
      localStorage.setItem('token', '');
      setMessage('credentials failed');
      setLoginSuccessful(false);
    }
  };

  return (
    <>
      <Header />
      <LoginForm
        handleSubmit={handleSubmit}
        loginSuccessful={loginSuccessful}
        email={email}
        password={password}
        message={message}
      />
      <Footer />
    </>
  );
}

export default Login;
