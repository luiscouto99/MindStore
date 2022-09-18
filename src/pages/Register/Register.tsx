import { useRef, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RegisterSuccessfull from './components/RegisterSuccessfull';
import { RegisterForm } from './components/RegisterForm';

import { addUser } from './services/addUser';

function Register() {
  const firstName = useRef('');
  const lastName = useRef('');
  const email = useRef('');
  const password = useRef('');
  const dateOfBirth = useRef('');
  const address = useRef('');
  const image = useRef('');
  const [message, setMessage] = useState('');
  const [isVarTrue, setIsVarTrue] = useState(true);
  const [userRegisteredWithSuccess, setUserRegisteredWithSuccess] = useState(false);

  const handleRegisterNewUser = async (event: any) => {
    event.preventDefault();
    const response = await addUser(firstName, lastName, email, password, dateOfBirth, address);

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
