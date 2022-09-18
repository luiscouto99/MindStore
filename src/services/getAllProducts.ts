type optionsProps = {
    method: string,
    authorization: string,
    requestString: string,
}
export const getAllProducts = (endpoint: string) =>
    async (options: optionsProps) => {
        const request = {
            method: options.method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": options.authorization
            }
        };

        const response = await fetch(endpoint + `${options.requestString}`, request);
        const json = await response.json();
        return json;
    };
