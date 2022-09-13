import React from 'react'

import { Button, CredentialsForm, CredentialsLabel, CredentialsInput } from "../../../components/Layout/Layout";
import { User } from "../../../types/user";

import styled from "styled-components/macro";

const ProfileBtnContainer = styled.div`
	display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;

export const ProfileForm = ({ handleSaveProfileChanges, firstName, lastName, email, password, address, image, userData, setEditProfile }: { handleSaveProfileChanges: () => void, firstName: string, lastName: string, email: string, password: string, address: string, image: string, userData: User, setEditProfile: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <CredentialsForm onSubmit={handleSaveProfileChanges}>
            <CredentialsLabel htmlFor="first-name">
                { /* @ts-ignore-next-line */}
                <CredentialsInput autoFocus type="text" name="first-name" ref={firstName} placeholder={userData.firstName} />
            </CredentialsLabel>
            <CredentialsLabel htmlFor="last-name">
                { /* @ts-ignore-next-line */}
                <CredentialsInput type="text" name="last-name" ref={lastName} placeholder={userData.lastName} />
            </CredentialsLabel>
            <CredentialsLabel htmlFor="email">
                { /* @ts-ignore-next-line */}
                <CredentialsInput type="email" name="email" ref={email} placeholder={userData.email} />
            </CredentialsLabel>
            <CredentialsLabel htmlFor="password">
                { /* @ts-ignore-next-line */}
                <CredentialsInput type="password" name="password" ref={password} placeholder="Password" />
            </CredentialsLabel>
            {/* 
            <CredentialsLabel htmlFor="dateOfBirth">
                <CredentialsInput type={isVarTrue ? "text" : "date"} onClick={handleVarClick} name="dateOfBirth" ref={dateOfBirth} required placeholder={userData.dateOfBirth} />
            </CredentialsLabel>
            */}
            <CredentialsLabel htmlFor="address">
                { /* @ts-ignore-next-line */}
                <CredentialsInput type="text" name="address" ref={address} placeholder={userData.address} />
            </CredentialsLabel>
            {/* 
            <CredentialsLabel htmlFor="phone">
                <CredentialsInput type="tel" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" placeholder="Phone Number" minLength={9} maxLength={9} ref={phone} required />
            </CredentialsLabel> 
            */}
            <CredentialsLabel htmlFor="url">
                { /* @ts-ignore-next-line */}
                <CredentialsInput type="url" name="url" id="url" placeholder="https://add-your-profile-picture.com" pattern="https://.*" size="900" ref={image}></CredentialsInput>
            </CredentialsLabel>

            <ProfileBtnContainer>
                <Button secondary onClick={() => setEditProfile(false)}>
                    Cancel
                </Button>
                <Button type="submit">
                    Save Changes
                </Button>
            </ProfileBtnContainer>
        </CredentialsForm>
    )
}