// @ts-nocheck

export const addUser = async (firstName, lastName, email, password, dateOfBirth, address, setMessage, setUserRegisteredWithSuccess) => {
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
}