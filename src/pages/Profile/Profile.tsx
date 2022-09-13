// @ts-nocheck
import { useState, useEffect, useRef } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ProfileForm } from "./components/ProfileForm";

import styled from "styled-components/macro";

import { Button, CredentialsLayout, CredentialsContainer, CredentialsTitle, CredentialsForm, CredentialsLabel, CredentialsInput } from "../../components/Layout/Layout"

const ProfileImage = styled.img`
	border-radius: 50%;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    object-fit: cover;
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

export const getUserInfoObject = (currentProfile, editedProfile) => {
	return {
		firstName: editedProfile.firstName.current.value || currentProfile.firstName,
		lastName: editedProfile.lastName.current.value || currentProfile.lastName,
		email: editedProfile.email.current.value || currentProfile.email,
		password: editedProfile.password.current.value || currentProfile.password,
		address: editedProfile.address.current.value || currentProfile.address,
		image: editedProfile.image.current.value || currentProfile.image
	}
}

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
		const profileData = getUserInfoObject(userData, { firstName, lastName, email, password, address, image })

		const request = {
			method: "PATCH",
			headers: { "Content-Type": "application/json", Authorization: fetchedToken },
			body: JSON.stringify(profileData),
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

	return (
		<>
			<Header />

			<CredentialsLayout>
				<CredentialsContainer profile>
					<ProfileImage src={userData.image} alt="profile image" />
					<CredentialsTitle>{userData.firstName + " " + userData.lastName}</CredentialsTitle>
					{
						editProfile ? (
							<>
								<ProfileForm handleSaveProfileChanges={handleSaveProfileChanges} firstName={firstName} lastname={lastName} email={email} password={password} address={address} image={image} userData={userData} setEditProfile={setEditProfile} />

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
			</CredentialsLayout>
			<Footer />
		</>
	);
}

export default Profile;

