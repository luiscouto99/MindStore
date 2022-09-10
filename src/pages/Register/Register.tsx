// @ts-nocheck
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import RegisterSuccessfull from "./components/RegisterSuccessfull";

import { Button, CredentialsLayout, CredentialsContainer, CredentialsTitle, CredentialsForm, CredentialsLabel, CredentialsInput, CredentialsFooterText } from '../../components/Layout/Layout';

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
	const [userRegisteredWithSuccess, setUserRegisteredWithSuccess] = useState(false);

	async function handleRegisterNewUser(event) {
		event.preventDefault();
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
			setMessage("Register failed!");
			setUserRegisteredWithSuccess(false);
		}
	};

	return (
		<>
			{
				userRegisteredWithSuccess ? (
					<RegisterSuccessfull />
				) : (
					<>
						<Header />
						<CredentialsLayout>
							<CredentialsContainer>
								<CredentialsTitle>Register</CredentialsTitle>
								<CredentialsForm onSubmit={handleRegisterNewUser}>
									<CredentialsLabel htmlFor="firstName">
										<CredentialsInput autoFocus type="text" name="firstName" ref={firstName} placeholder="First Name" required />
									</CredentialsLabel>
									<CredentialsLabel htmlFor="lastName">
										<CredentialsInput type="text" name="lastName" ref={lastName} placeholder="Last Name" required />
									</CredentialsLabel>
									<CredentialsLabel htmlFor="email">
										<CredentialsInput type="email" name="email" ref={email} placeholder="Email" required />
									</CredentialsLabel>
									<CredentialsLabel htmlFor="password">
										<CredentialsInput type="password" name="password" ref={password} placeholder="Password" required />
									</CredentialsLabel>
									<CredentialsLabel htmlFor="dateOfBirth">
										<CredentialsInput type={isVarTrue ? "text" : "date"} onClick={() => setIsVarTrue(false)} name="dateOfBirth" ref={dateOfBirth} required placeholder="Date of Birth" />
									</CredentialsLabel>
									<CredentialsLabel htmlFor="address">
										<CredentialsInput type="text" name="address" ref={address} placeholder="Address" required />
									</CredentialsLabel>
									<CredentialsLabel htmlFor="url">
										<CredentialsInput type="url" name="url" id="url" placeholder="https://photo-example.com" pattern="https://.*" size="30" ref={profilePhoto}></CredentialsInput>
									</CredentialsLabel>
									<Button type="submit">
										Register
									</Button>
								</CredentialsForm>
								<CredentialsFooterText>{message}</CredentialsFooterText>
								<CredentialsFooterText className="footer-text">
									Already have an account?
									<Link to="/login"> Login here</Link>
								</CredentialsFooterText>
							</CredentialsContainer>
						</CredentialsLayout>
					</>
				)
			}
		</>
	);
}

export default Register;
