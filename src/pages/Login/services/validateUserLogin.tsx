// @ts-nocheck
export const validateUserLogin = async (email, password, setMessage, setToken, setId, setLoginSuccessful) => {
    const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.current.value, password: password.current.value }),
    };

    try {
        const response = await fetch("/login", request);
        if (response.status === 200) {
            setMessage("Login successful");
            const givenToken = response.headers.get("Authorization");
            const givenId = response.headers.get("Id");
            setToken(givenToken); //Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWltQGVtYWlsLmNvbSIsImV4cCI6MTY2MTQyNzQ1OH0.mvKcLrZqat8P2lrgyH765CSeCbQ9EefXpK2kVMfnKHSp7bj9yTy4jGlLRiWBKsuid9QJF0graoYuuZe9agfrCA
            setId(givenId); //3

            // estes dois behaviours sao as possibilidades que existem caso haja falha a obter os valores, cabe-me a mim decidir qual a melhor approach

            // se existir coloco o que tem, se nao existir nao coloco nada
            givenToken && localStorage.setItem('token', givenToken);

            // se nao exisitir giveId coloco ""
            localStorage.setItem('Id', givenId || "");
            localStorage.setItem('adminToken', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6ZXRvQGVtYWlsLmNvbSIsImV4cCI6MTY2MTQyOTUyNH0.t9eLz6j70whrt17ea3DYrs7o96AVVKy93_EsS762IK9KjxVf-tCF2Cz1KPf0V1c-iOvbvQQy0fHvW25N-_Eb-Q");

            setLoginSuccessful(true);
        } else {
            setMessage("credentials failed");
            setToken(null);
            setLoginSuccessful(false);
        }
    } catch (e) {
        setMessage("credentials failed");
        setToken(null);
    }
}