// @ts-nocheck

import React, { useRef } from 'react'
import Header from '../../components/Header/Header';
import "./credentials.css";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';


//autoComplete='off'
function Login() {

    const email = useRef();
    const password = useRef();
    const [loginColor, setLoginColor] = useState(false);
    
	const [message, setMessage] = useState("");
	const [token, setToken] = useState("");
    const [id, setId] = useState("");
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    
    useEffect(() => {
        setLoginColor(true);
    }, []);


    async function handleSubmit(event) {
        event.preventDefault();

        // console.log(email, password);

		const request = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email: email.current.value, password: password.current.value }),
		};

        try {
            const response = await fetch("/login", request);
            if(response.status === 200) {
                setMessage("Login successful");
                const givenToken = response.headers.get("Authorization");
                setToken(givenToken); //Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWltQGVtYWlsLmNvbSIsImV4cCI6MTY2MTQyNzQ1OH0.mvKcLrZqat8P2lrgyH765CSeCbQ9EefXpK2kVMfnKHSp7bj9yTy4jGlLRiWBKsuid9QJF0graoYuuZe9agfrCA
                const givenId = response.headers.get("Id");
                setId(givenId); //3
                console.log("usertoken\n", givenToken);
                console.log("userid\n", givenId);
                console.log(response.status);
    
                localStorage.setItem('token', givenToken);
                localStorage.setItem('Id', givenId);
                localStorage.setItem('adminToken', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6ZXRvQGVtYWlsLmNvbSIsImV4cCI6MTY2MTQyOTUyNH0.t9eLz6j70whrt17ea3DYrs7o96AVVKy93_EsS762IK9KjxVf-tCF2Cz1KPf0V1c-iOvbvQQy0fHvW25N-_Eb-Q");
                
                // email.current.value = "";
                // password.current.value = "";
                // document.getElementById("myForm").reset();
                setLoginSuccessful(true);
            } else {
                setMessage("credentials failed"); //devolve a msg OK ou ERRO do json login
                setToken(null);
                setLoginSuccessful(false);
            }


        } catch (e) {
            console.log("error message ", e.message);
            console.log("login failed")
	        setMessage("credentials failed"); //devolve a msg OK ou ERRO do json login
    		setToken(null);
        }

        // try {
        //     const response = await fetch("/login", request);
        //     // console.log("response", response.headers.get("Id"));
        //     // console.log("response", response.headers.get("Authorization"));
        //     // console.log("response", response.status);
        //     setMessage("Login successful");
        //     const givenToken = response.headers.get("Authorization");
        //     setToken(givenToken); //Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWltQGVtYWlsLmNvbSIsImV4cCI6MTY2MTQyNzQ1OH0.mvKcLrZqat8P2lrgyH765CSeCbQ9EefXpK2kVMfnKHSp7bj9yTy4jGlLRiWBKsuid9QJF0graoYuuZe9agfrCA
        //     const givenId = response.headers.get("Id");
        //     setId(givenId); //3
        //     console.log("usertoken\n", givenToken);
        //     console.log("userid\n", givenId);
        //     console.log(response.status);

        //     localStorage.setItem('token', givenToken);
        //     localStorage.setItem('Id', givenId);
        //     localStorage.setItem('adminToken', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6ZXRvQGVtYWlsLmNvbSIsImV4cCI6MTY2MTQyOTUyNH0.t9eLz6j70whrt17ea3DYrs7o96AVVKy93_EsS762IK9KjxVf-tCF2Cz1KPf0V1c-iOvbvQQy0fHvW25N-_Eb-Q");


        // } catch (e) {
        //     console.log("error message ", e.message);
        //     console.log("login failed resposta martelada")
	    //     setMessage("credentials failed"); //devolve a msg OK ou ERRO do json login
    	// 	setToken(null);
        // }


    };

    if(loginSuccessful === false) {
        return (
            <>
               <Header loginColor={loginColor} />
                <div className='container'>
                    <div className='title'>
                        <h2>Login</h2>
                    </div>
    
                    <form className='form' id='myForm' onSubmit={handleSubmit}>
                        <label className='label' htmlFor="login">
                            <input autoFocus autoComplete="off" type="text" name="login" placeholder="Email" ref={email} required/>
                        </label>
    
                        <label className='label' htmlFor="password">
                            <input type="password" name="password" placeholder="Password" ref={password} required/>
                        </label>
                        <button className="button" type="submit">Login</button>
                    </form>
                    <p>{message}</p>
                    <p className='footer-text'>
                        Don't have an account?
                        <Link to="/register" href="#"> Register here</Link>
                    </p>
                </div>
            </>
        );
    } else { //login OK
        return (
            <>
               <Header loginColor={loginColor} />
                <div className='container success-container'>
                    <div className='title'>
                        <h2>Login Successful!</h2>
                    </div>
    
                    {/* <form className='form'>
                        <label className='label' htmlFor="login">
                            <input autoFocus autoComplete="off" type="text" name="login" placeholder={email.current.value} />
                        </label>
    
                        <label className='label' htmlFor="password">
                            <input type="password" name="password" placeholder="my password" />
                        </label>
                    </form> */}
           
                        <Link to="/profile" className='button-success'>Go to Profile Page</Link>

                    {/* <p className='footer-text'>
                        Don't have an account?
                        <Link to="/register" href="#"> Register here</Link>
                    </p> */}
                </div>
            </>
        );

    }



}

export default Login;