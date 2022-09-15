import { useState, useEffect, useRef } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { ProfileCard } from './components/ProfileCard';

import { getUserProfile } from './services/getUserProfile';
import { updateUserProfile } from './services/updateUserProfile';

export const getUserInfoObject = (currentProfile, editedProfile) => {
  return {
    firstName: editedProfile.firstName.current.value || currentProfile.firstName,
    lastName: editedProfile.lastName.current.value || currentProfile.lastName,
    email: editedProfile.email.current.value || currentProfile.email,
    password: editedProfile.password.current.value || currentProfile.password,
    address: editedProfile.address.current.value || currentProfile.address,
    image: editedProfile.image.current.value || currentProfile.image,
  };
};

function Profile() {
  const fetchedToken = localStorage.getItem('token');
  const fetchedId = localStorage.getItem('Id');

  const [editProfile, setEditProfile] = useState(false);
  const [userData, setUserData] = useState({});
  const [newInfo, setNewInfo] = useState(false);
  const [changesSaved, setChangesSaved] = useState(false);
  const [message, setMessage] = useState('');
  const firstName = useRef('');
  const lastName = useRef('');
  const email = useRef('');
  const password = useRef('');
  const address = useRef('');
  const image = useRef('');

  useEffect(() => {
    const fetchedId = localStorage.getItem('Id');

    const fetchProfile = async () => {
      const response = await getUserProfile(fetchedId);
      setUserData(response);
    };
    fetchProfile();
  }, [newInfo]);

  async function handleSaveProfileChanges(event) {
    event.preventDefault();
    const profileData = getUserInfoObject(userData, {
      firstName,
      lastName,
      email,
      password,
      address,
      image,
    });
    const response = await updateUserProfile(profileData, fetchedId, fetchedToken);

    if (response.status === 200) {
      setNewInfo(true);
      setUserData(response.data);
      setMessage('Your changes were successfully saved!');
      setChangesSaved(true);
      setEditProfile(!editProfile);
    } else {
      setMessage('Oops! Something went wrong while trying to update your profile');
    }
  }

  const inputRef = {
    firstName,
    lastName,
    email,
    password,
    address,
    image,
  };

  return (
    <>
      <Header />
      <ProfileCard
        userData={userData}
        handleSaveProfileChanges={handleSaveProfileChanges}
        message={message}
        setEditProfile={setEditProfile}
        editProfile={editProfile}
        inputRef={inputRef}
      />
      <Footer />
    </>
  );
}

export default Profile;
