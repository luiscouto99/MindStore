// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import "./profile.css";
import "../Credentials/credentials.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import avatar from "../../assets/avatar.jpg";

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
					Authorization: localStorage.getItem("adminToken"),
				},
			};

			const response = await fetch(`/api/v1/admins/users/${fetchedId}`, request);
			console.log("response", response);

			const json = await response.json();
			console.log("json", json);
			setUserData(json);
		}
		fetchProfile();
	}, [newInfo]);

	async function handleSaveProfileChanges(event) {
		event.preventDefault();
		// console.log(image);

		console.log("insidehandleSavePRofileChanges", userData, newInfo);

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
				firstName: interFirst, //firstName.current.value, //ref que recebe do input
				lastName: interLast, //lastName.current.value,
				email: interEmail, //email.current.value,
				password: interPassword, // password.current.value,
				address: interAddress, //address.current.value,
				image: interImage, //image.current.value
			}),
		};

		const response = await fetch(`/api/v1/users/${fetchedId}`, request);
		const json = await response.json();

		if(response.status === 200) {
			const newUserData = json;
			console.log("new user data", newUserData);
	
			setNewInfo(true);
			setUserData(newUserData);
			setMessage("Your changes were successfully saved!");

			setChangesSaved(true);
			setEditProfile(!editProfile);
		} else {
			setMessage("Oops! Something went wrong while trying to update your profile");
		}
	};

	function handleEditProfile() {
		console.log("button edit profile");
		setEditProfile(!editProfile);
	}
	function handleSaveChangesButton() {
		// console.log("button to Save Changes");
		// setChangesSaved(true);
		// setEditProfile(!editProfile);
	}

	function handleCancelEditProfile() {
		setEditProfile(false);
	}

	return (
		<>
			<Header linkActive={true} />

			{editProfile ? (
				<>
					<div className="container to-save">
						{/* <img src={avatar} alt="" className="profile-image" /> */}
						<img src={userData.image} alt="" className="profile-image" />

						<div className="title title-to-change">
							<h2>Profile</h2>
						</div>
						<form className="form" onSubmit={handleSaveProfileChanges}>
							<label className="label">
								<input autoFocus type="text" name="first-name" ref={firstName} placeholder={userData.firstName} />
							</label>
							<label className="label">
								<input autoFocus type="text" name="last-name" ref={lastName} placeholder={userData.lastName} />
							</label>
							<label className="label">
								<input type="email" name="email" ref={email} placeholder={userData.email} />
							</label>
							<label className="label">
								<input type="password" name="password" ref={password} placeholder="Password" />
							</label>
							{/* <label className="label date">
								<input type={isVarTrue ? "text" : "date"} onClick={handleVarClick} name="dateOfBirth" ref={dateOfBirth} required placeholder={userData.dateOfBirth} />
							</label> */}
							<label className="label">
								<input type="text" name="address" ref={address} placeholder={userData.address} />
							</label>
							{/* <label className="label">
									<input type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Phone Number" minLength={9} maxLength={9} ref={phone} required />
								</label> */}
							<label className="label">
								<input type="url" name="url" id="url" placeholder="https://add-your-profile-picture.com" pattern="https://.*" size="900" ref={image}></input>
							</label>
							<div className="btn-flex btn-flex-margin">
								<button className="button btn-cancel" onClick={handleCancelEditProfile}>
									Cancel
								</button>
								<button type="submit" className="button btn-save" onClick={handleSaveChangesButton}>
									Save Changes
								</button>
							</div>
						</form>
						<div className={message === "Your changes were successfully saved!" ? 
							"success-message" : "error-message" }>{message}</div>
					</div>
					<div className="footer-wrapper edit-footer">
						<Footer />
					</div>
				</>
			) : (
				<>
					<div className="container non-edit-mode">
						<img src={userData.image} alt="" className="profile-image" />

						<div className="title title-profile success-h2">
							<h2>
								{userData.firstName} {userData.lastName}{" "}
							</h2>
						</div>
						<div className="description-profile">
							<p>{userData.email}</p>
							<p>{userData.dateOfBirth}</p>
							<p>{userData.address}</p>
						</div>

						<button className="button edit-profile-button" onClick={handleEditProfile}>
							Edit Profile
						</button>
					</div>
					<div className="footer-wrapper non-edit-footer">
						<Footer />
					</div>
				</>
			)}
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
