// @ts-nocheck
import { useState, useEffect, useRef } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ProfileCard } from "./components/ProfileCard";

import { getUserProfile } from "./services/getUserProfile";
import { updateUserProfile } from "./services/updateUserProfile";

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
		getUserProfile(fetchedId, setUserData);
	}, [newInfo]);

	async function handleSaveProfileChanges(event) {
		event.preventDefault();
		const profileData = getUserInfoObject(userData, { firstName, lastName, email, password, address, image })
		updateUserProfile(profileData, fetchedId, setNewInfo, setUserData, setMessage, setChangesSaved, setEditProfile, editProfile, fetchedToken);
	};

	return (
		<>
			<Header />
			<ProfileCard userData={userData} handleSaveProfileChanges={handleSaveProfileChanges} firstName={firstName} lastName={lastName} email={email} message={message} setEditProfile={setEditProfile} editProfile={editProfile} password={password} address={address} image={image} />
			<Footer />
		</>
	);
}

export default Profile;

