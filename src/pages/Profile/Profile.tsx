// @ts-nocheck
import { useState, useEffect, useRef } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import styled from "styled-components/macro";

import { Button, CredentialsLayout, CredentialsContainer, CredentialsTitle, CredentialsForm, CredentialsLabel, CredentialsInput } from "../../components/Layout/Layout"

const ProfileImage = styled.img`
	border-radius: 50%;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    object-fit: cover;
`;

const ProfileBtnContainer = styled.div`
	display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;

const ProfileMessage = styled.p`
	text-align: center;
    padding: 10px;
    font-size: 15px;
    text-decoration: ${(props) => props.error ? "underline;" : "none;"};
`;

const ProfileDescription = styled.div`
	margin-bottom: 20px;
	text-align: center;
`;

const ProfileDescriptionText = styled.p`
	font-weight: 200;
	font-size: 16px;
	color: rgb(175, 175, 175);
`;

function Profile() {
	const fetchedToken = localStorage.getItem("token");
	const fetchedId = localStorage.getItem("Id");

	const [editProfile, setEditProfile] = useState(false);
	const [userData, setUserData] = useState({});
	const [newInfo, setNewInfo] = useState(false);
	const [changesSaved, setChangesSaved] = useState(false);
	const [message, setMessage] = useState("");
	const firstName = useRef("");
	const lastName = useRef("");
	const email = useRef("");
	const password = useRef("");
	const address = useRef("");
	const image = useRef("");

	let interFirst = "";
	let interLast = "";
	let interEmail = "";
	let interPassword = "";
	let interAddress = "";
	let interImage = "";

	useEffect(() => {
		const fetchedId = localStorage.getItem("Id");

		async function fetchProfile() {
			const request = {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("token"),
				},
			};

			const response = await fetch(`/api/v1/users/${fetchedId}`, request);
			const json = await response.json();
			setUserData(json);
		}
		fetchProfile();
	}, [newInfo]);

	async function handleSaveProfileChanges(event) {
		event.preventDefault();

		if (firstName.current.value === "") {
			interFirst = userData.firstName;
		} else {
			interFirst = firstName.current.value;
		}

		if (lastName.current.value === "") {
			interLast = userData.lastName;
		} else {
			interLast = lastName.current.value;
		}

		if (email.current.value === "") {
			interEmail = userData.email;
		} else {
			interEmail = email.current.value;
		}

		if (password.current.value === "") {
			interPassword = userData.password;
		} else {
			interPassword = password.current.value;
		}

		if (address.current.value === "") {
			interAddress = userData.address;
		} else {
			interAddress = address.current.value;
		}

		if (image.current.value === "") {
			interImage = userData.image;
		} else {
			interImage = image.current.value;
		}
		console.log("print info:", interFirst, interLast, interEmail, interPassword, interAddress, interImage);

		const request = {
			method: "PATCH",
			headers: { "Content-Type": "application/json", Authorization: fetchedToken },
			body: JSON.stringify({
				firstName: interFirst,
				lastName: interLast,
				email: interEmail,
				password: interPassword,
				address: interAddress,
				image: interImage,
			}),
		};
		const response = await fetch(`/api/v1/users/${fetchedId}`, request);
		const json = await response.json();

		if (response.status === 200) {
			const newUserData = json;

			setNewInfo(true);
			setUserData(newUserData);
			setMessage("Your changes were successfully saved!");
			setChangesSaved(true);
			setEditProfile(!editProfile);
		} else {
			setMessage("Oops! Something went wrong while trying to update your profile");
		}
	};

	function handleSaveChangesButton() {
		setChangesSaved(true);
		setEditProfile(!editProfile);
	}

	return (
		<>
			<Header />

			<CredentialsLayout>
				{
					<CredentialsContainer profile>
						<ProfileImage src={userData.image} alt="profile image" />
						<CredentialsTitle>
							{userData.firstName} {userData.lastName}{" "}
						</CredentialsTitle>

						{
							editProfile ? (
								<>
									<CredentialsForm onSubmit={handleSaveProfileChanges}>
										<CredentialsLabel htmlFor="first-name">
											<CredentialsInput autoFocus type="text" name="first-name" ref={firstName} placeholder={userData.firstName} />
										</CredentialsLabel>
										<CredentialsLabel htmlFor="last-name">
											<CredentialsInput type="text" name="last-name" ref={lastName} placeholder={userData.lastName} />
										</CredentialsLabel>
										<CredentialsLabel htmlFor="email">
											<CredentialsInput type="email" name="email" ref={email} placeholder={userData.email} />
										</CredentialsLabel>
										<CredentialsLabel htmlFor="password">
											<CredentialsInput type="password" name="password" ref={password} placeholder="Password" />
										</CredentialsLabel>
										{/* 
									<CredentialsLabel htmlFor="dateOfBirth">
										<CredentialsInput type={isVarTrue ? "text" : "date"} onClick={handleVarClick} name="dateOfBirth" ref={dateOfBirth} required placeholder={userData.dateOfBirth} />
									</CredentialsLabel>
									*/}
										<CredentialsLabel htmlFor="address">
											<CredentialsInput type="text" name="address" ref={address} placeholder={userData.address} />
										</CredentialsLabel>
										{/* 
									<CredentialsLabel htmlFor="phone">
										<CredentialsInput type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Phone Number" minLength={9} maxLength={9} ref={phone} required />
									</CredentialsLabel> 
									*/}
										<CredentialsLabel htmlFor="url">
											<CredentialsInput type="url" name="url" id="url" placeholder="https://add-your-profile-picture.com" pattern="https://.*" size="900" ref={image}></CredentialsInput>
										</CredentialsLabel>

										<ProfileBtnContainer>
											<Button secondary onClick={() => setEditProfile(false)}>
												Cancel
											</Button>
											<Button type="submit" onClick={handleSaveChangesButton}>
												Save Changes
											</Button>
										</ProfileBtnContainer>
									</CredentialsForm>

									<ProfileMessage error={message === "Your changes were successfully saved!" ? false : true}>
										{message}
									</ProfileMessage>
								</>
							) : (
								<>
									<ProfileDescription>
										<ProfileDescriptionText>{userData.email}</ProfileDescriptionText>
										<ProfileDescriptionText>{userData.dateOfBirth}</ProfileDescriptionText>
										<ProfileDescriptionText>{userData.address}</ProfileDescriptionText>
									</ProfileDescription>

									<Button onClick={() => setEditProfile(!editProfile)}>
										Edit Profile
									</Button>
								</>
							)
						}
					</CredentialsContainer>
				}
			</CredentialsLayout>
			<Footer />
		</>
	);
}

export default Profile;

/*
	function handleSaveProfileChanges(event) {
		event.preventDefault();
		async function editProfile() {
			const request = {
				method: "PATCH",
				headers: { "Content-Type": "application/json", 
							"Authorization": fetchedToken },
				body: JSON.stringify({
					firstName: firstName.current.value, //ref que recebe do input
					lastName: lastName.current.value,
					email: email.current.value,
					password: password.current.value,
					address: address.current.value,
				}),
			};
	
			const response = await fetch(`/api/v1/users/${fetchedId}`, request);
			const json = await response.json();
			// console.log("editprofile response json", json);
			const newUserData = json;

			setUserData(newUserData);

		};
		editProfile();
	};
*/
