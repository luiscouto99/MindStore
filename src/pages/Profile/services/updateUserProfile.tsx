//import { Request } from "../../../types/request";
// @ts-nocheck
import { User } from "../../../types/user";

export const updateUserProfile = async (profileData: User, fetchedId: string | null, setNewInfo: (value: React.SetStateAction<boolean>) => void, setUserData: (value: React.SetStateAction<{}>) => void, setMessage: (value: React.SetStateAction<string>) => void, setChangesSaved: (value: React.SetStateAction<boolean>) => void, setEditProfile: (value: React.SetStateAction<boolean>) => void, editProfile: boolean, fetchedToken: string | null) => {
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
}