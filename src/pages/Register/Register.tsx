// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useRef, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RegisterSuccessfull from './components/RegisterSuccessfull';
import { RegisterForm } from './components/RegisterForm';

import { addUser } from './services/addUser';

function Register() {
  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dateOfBirth = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const image = useRef('');
  const [message, setMessage] = useState('');
  const [isVarTrue, setIsVarTrue] = useState(true);
  const [userRegisteredWithSuccess, setUserRegisteredWithSuccess] = useState(false);

  const userObj = { firstName, lastName, email, password, dateOfBirth, address };

  const handleRegisterNewUser = async (event: any) => {
    event.preventDefault();
    const response = await addUser(userObj);

    if (response.status === 200) {
      setMessage('Register successful!');
      setUserRegisteredWithSuccess(true);
    } else {
      setMessage('Register failed!');
      setUserRegisteredWithSuccess(false);
    }
  };

  const inputRef = {
    firstName,
    lastName,
    email,
    password,
    dateOfBirth,
    address,
    image,
  };

  return (
    <>
      <Header />
      {userRegisteredWithSuccess ? (
        <RegisterSuccessfull />
      ) : (
        <RegisterForm
          handleRegisterNewUser={handleRegisterNewUser}
          inputRef={inputRef}
          isVarTrue={isVarTrue}
          setIsVarTrue={setIsVarTrue}
          message={message}
        />
      )}
      <Footer />
    </>
  );
}

export default Register;
