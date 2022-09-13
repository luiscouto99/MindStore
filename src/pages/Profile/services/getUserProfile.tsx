// import { Request } from "../../../types/request";
// @ts-nocheck
export const getUserProfile = async (fetchedId: string, setUserData: React.Dispatch<React.SetStateAction<{}>>) => {
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