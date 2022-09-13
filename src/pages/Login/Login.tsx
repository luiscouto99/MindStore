// @ts-nocheck
import { useRef, useState } from 'react'

import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header';
import { LoginForm } from "./components/LoginForm";

import { validateUserLogin } from "./services/validateUserLogin";

function Login() {
    const email = useRef();
    const password = useRef();

    const [message, setMessage] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [id, setId] = useState<string | null>(null);
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    function handleSubmit(event: any) {
        event.preventDefault();
        validateUserLogin(email, password, setMessage, setToken, setId, setLoginSuccessful);
    };

    return (
        <>
            <Header />
            <LoginForm handleSubmit={handleSubmit} loginSuccessful={loginSuccessful} email={email} password={password} message={message} />
            <Footer />
        </>
    );
}

export default Login;