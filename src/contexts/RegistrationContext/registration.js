export const registration = ({
                                 username, // must be unique
                                 password, // must contain at least 6 characters
                                 email, // must be a unique, valid email address
                             }) => {
    return fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        //hier muss noch user übergeben werden
        body: JSON.stringify(username),
    }).then((res) => {
        if (!res.ok) {
            throw new Error("registration failed");
        }

        return res.json();
    });
};