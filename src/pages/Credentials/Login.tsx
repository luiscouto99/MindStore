// @ts-nocheck
import { useRef, useState } from 'react'
import { Link } from "react-router-dom";

import Header from '../../components/Header/Header';

import styled, { css } from "styled-components";
import { Button, LoginLayout } from '../../components/Layout/Layout';
import "./credentials.css";

const LoginContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 30%;
    min-width: 300px;
    background-color: white;
    padding: 20px;

    ${(props) => {
        props.isSuccessfull && css`
        display: flex;
        align-items: center;
        padding-bottom: 30px;
        `
    }}
`;

const LoginTitle = styled.h2`
    font-family: "Prata", serif;
    font-weight: normal;
    text-align: center;
    border-bottom: 0.5px solid #dddddd;
    margin: 0 15%;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 15%;
    gap: 20px;
`;

const LoginLabel = styled.label`
    width: 100%;
`;

const LoginInput = styled.input`
    background-color: var(--light-grey);
    border: none;
    border-radius: 4px;
    padding: 13px 5px 13px 10px;
    width: 94.5%;
    font-family: "Roboto", sansserif;
    transition: ease-in-out 0.2s;

    &::placeholder {
        color:rgb(163, 163, 163);
    }

    &:focus {
        outline: none;
        box-shadow: -1px 6px 10px 0 rgba(119, 119, 119, 0.15);
    }
`;

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
            <LoginLayout>
                <LoginContainer isSuccessfull={loginSuccessful}>
                    <LoginTitle>{loginSuccessful ? "Login Successful" : "Login"}</LoginTitle>

                    {
                        loginSuccessful ? (
                            <Link to="/profile" className='button-success'>Go to Profile Page</Link>
                        ) : (
                            <>
                                <LoginForm data-testid="login-form" id='myForm' onSubmit={handleSubmit}>
                                    <LoginLabel htmlFor="login">
                                        <LoginInput autoFocus autoComplete="off" type="text" name="login" placeholder="Email" ref={email} required />
                                    </LoginLabel>

                                    <LoginLabel htmlFor="password">
                                        <LoginInput type="password" name="password" placeholder="Password" ref={password} required />
                                    </LoginLabel>
                                    <Button type="submit">Login</Button>
                                </LoginForm>
                                <p>{message}</p>
                                <p className='footer-text'>
                                    Don't have an account?
                                    <Link to="/register"> Register here</Link>
                                </p>
                            </>
                        )
                    }
                </LoginContainer>
            </LoginLayout>
        </>
    );
}

export default Login;