// @ts-nocheck
import { useRef, useState } from 'react'
import { Link } from "react-router-dom";

import Header from '../../components/Header/Header';

import { Button, CredentialsLayout, CredentialsContainer, CredentialsTitle, CredentialsForm, CredentialsLabel, CredentialsInput, CredentialsFooterText } from '../../components/Layout/Layout';

function Login() {
    const email = useRef();
    const password = useRef();

    const [message, setMessage] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [id, setId] = useState<string | null>(null);
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    async function handleSubmit(event: any) {
        event.preventDefault();

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email.current.value, password: password.current.value }),
        };

        try {
            const response = await fetch("/login", request);
            if (response.status === 200) {
                setMessage("Login successful");
                const givenToken = response.headers.get("Authorization");
                setToken(givenToken); //Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWltQGVtYWlsLmNvbSIsImV4cCI6MTY2MTQyNzQ1OH0.mvKcLrZqat8P2lrgyH765CSeCbQ9EefXpK2kVMfnKHSp7bj9yTy4jGlLRiWBKsuid9QJF0graoYuuZe9agfrCA
                const givenId = response.headers.get("Id");
                setId(givenId); //3
                console.log("usertoken\n", givenToken);
                console.log("userid\n", givenId);
                console.log(response.status);

                // estes dois behaviours sao as possibilidades que existem caso haja falha a obter os valores, cabe-me a mim decidir qual a melhor approach

                // se existir coloco o que tem, se nao existir nao coloco nada
                givenToken && localStorage.setItem('token', givenToken);

                // se nao exisitir giveId coloco ""
                localStorage.setItem('Id', givenId || "");
                localStorage.setItem('adminToken', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6ZXRvQGVtYWlsLmNvbSIsImV4cCI6MTY2MTQyOTUyNH0.t9eLz6j70whrt17ea3DYrs7o96AVVKy93_EsS762IK9KjxVf-tCF2Cz1KPf0V1c-iOvbvQQy0fHvW25N-_Eb-Q");

                setLoginSuccessful(true);
            } else {
                setMessage("credentials failed"); //devolve a msg OK ou ERRO do json login
                setToken(null);
                setLoginSuccessful(false);
            }
        } catch (e) {
            console.log("error message ", (e as unknown as Error).message);
            console.log("login failed")
            setMessage("credentials failed"); //devolve a msg OK ou ERRO do json login
            setToken(null);
        }
    };

    return (
        <>
            <Header />
            <CredentialsLayout>
                <CredentialsContainer isSuccessfull={loginSuccessful}>
                    <CredentialsTitle>{loginSuccessful ? "Login Successful" : "Login"}</CredentialsTitle>

                    {
                        loginSuccessful ? (
                            <Link to="/profile" className='button-success'>Go to Profile Page</Link>
                        ) : (
                            <>
                                <CredentialsForm data-testid="login-form" id='myForm' onSubmit={handleSubmit}>
                                    <CredentialsLabel htmlFor="login">
                                        <CredentialsInput autoFocus autoComplete="off" type="text" name="login" placeholder="Email" ref={email} required />
                                    </CredentialsLabel>

                                    <CredentialsLabel htmlFor="password">
                                        <CredentialsInput type="password" name="password" placeholder="Password" ref={password} required />
                                    </CredentialsLabel>
                                    <Button type="submit">Login</Button>
                                </CredentialsForm>
                                <CredentialsFooterText>{message}</CredentialsFooterText>
                                <CredentialsFooterText className='footer-text'>
                                    Don't have an account?
                                    <Link to="/register"> Register here</Link>
                                </CredentialsFooterText>
                            </>
                        )
                    }
                </CredentialsContainer>
            </CredentialsLayout>
        </>
    );
}

export default Login;