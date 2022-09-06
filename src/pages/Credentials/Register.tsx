// @ts-nocheck

import React from "react";
import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import RegisterSuccessfull from "../../components/RegisterSuccessfull/RegisterSuccessfull";
import "./credentials.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Register() {
	const firstName = useRef("");
	const lastName = useRef("");
	const email = useRef("");
	const password = useRef("");
	const dateOfBirth = useRef("");
	const address = useRef("");
	const profilePhoto = useRef("");
	const [message, setMessage] = useState("");
	const [isVarTrue, setIsVarTrue] = useState(true);
	const [registerColor, setRegisterColor] = useState(false);
	const [userRegisteredWithSuccess, setUserRegisteredWithSuccess] = useState(false);

	useEffect(() => {
		setRegisterColor(true);
	}, []);

	async function handleRegisterNewUser(event) {
		event.preventDefault();
		// console.log("User Registered with success!");
		const request = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				firstName: firstName.current.value,
				lastName: lastName.current.value,
				email: email.current.value,
				password: password.current.value,
				dateOfBirth: dateOfBirth.current.value,
				address: address.current.value,
			}),
		};

		const response = await fetch("/api/v1/users", request);
		if (response.status === 200) {
			setMessage("Register successful!");
			setUserRegisteredWithSuccess(true);
		} else {
			setMessage("Register failed"); //devolve a msg OK ou ERRO do json login
			setUserRegisteredWithSuccess(false);
		}
	};

	function handleVarClick() {
		setIsVarTrue(false);
	}

	if(userRegisteredWithSuccess === false) {
		return (
			<>
				<Header registerColor={registerColor} />
				<div className="container">
					<div className="title">
						<h2>Register</h2>
					</div>
					<form className="form" onSubmit={handleRegisterNewUser}>
						<label className="label">
							<input autoFocus type="text" name="firstName" ref={firstName} placeholder="First Name" required />
						</label>
						<label className="label">
							<input autoFocus type="text" name="lastName" ref={lastName} placeholder="Last Name" required />
						</label>
						<label className="label">
							<input type="email" name="email" ref={email} placeholder="Email" required />
						</label>
						<label className="label">
							<input type="password" name="password" ref={password} placeholder="Password" required />
						</label>
						<label className="label date">
							<input type={isVarTrue ? "text" : "date"} onClick={handleVarClick} name="dateOfBirth" ref={dateOfBirth} required placeholder="Date of Birth" />
						</label>
						<label className="label">
							<input type="text" name="address" ref={address} placeholder="Address" required />
						</label>
						{/* <label className='label'>
							<input type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Phone Number" minLength={9} maxLength={9} ref={phone} required />
						</label> */}
						<label className="label">
							<input type="url" name="url" id="url" placeholder="https://photo-example.com" pattern="https://.*" size="30" ref={profilePhoto}></input>
						</label>
						<button className="button" type="submit">
							Register
						</button>
					</form>
					<p>{message}</p>
					<p className="footer-text">
						Already have an account?
						<Link to="/login"> Login here</Link>
					</p>
				</div>
			</>
		);
		
	} else {
		return (
		<>
		<RegisterSuccessfull />
			{/* <Header registerColor={registerColor} />
			<h1>Login Successful!</h1>
			<button>Go your profile page</button>
			<button>Go to Products page</button> */}
		</>
		);
	}
}

export default Register;
