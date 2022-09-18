import styled from 'styled-components/macro';

import {
  Button,
  CredentialsLayout,
  CredentialsContainer,
  CredentialsTitle,
} from '../../../components/Layout/Layout';

import { ProfileForm } from './ProfileForm';

import { PreviousUser, User } from '../../../types/user';

const ProfileImage = styled.img`
  border-radius: 50%;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

type ProfileMessageProps = {
  error?: boolean;
};
const ProfileMessage = styled.p<ProfileMessageProps>`
  text-align: center;
  padding: 10px;
  font-size: 15px;
  text-decoration: ${(props) => (props.error ? 'underline;' : 'none;')};
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

export const ProfileCard = ({
  userData,
  handleSaveProfileChanges,
  setEditProfile,
  editProfile,
  message,
  inputRef,
}: {
  userData: PreviousUser;
  handleSaveProfileChanges: (event: any) => Promise<void>;
  inputRef: User;
  message: string;
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  editProfile: boolean;
}) => {
  const { firstName, lastName, email, password, address, image } = inputRef;
  return (
    <CredentialsLayout>
      <CredentialsContainer profile>
        <ProfileImage src={userData.image} alt="profile image" />
        <CredentialsTitle>{userData.firstName + ' ' + userData.lastName}</CredentialsTitle>
        {editProfile ? (
          <>
            <ProfileForm
              handleSaveProfileChanges={handleSaveProfileChanges}
              firstName={firstName}
              lastName={lastName}
              email={email}
              password={password}
              address={address}
              image={image}
              userData={userData}
              setEditProfile={setEditProfile}
            />

            <ProfileMessage
              error={message === 'Your changes were successfully saved!' ? false : true}
            >
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

            <Button onClick={() => setEditProfile(!editProfile)}>Edit Profile</Button>
          </>
        )}
      </CredentialsContainer>
    </CredentialsLayout>
  );
};
