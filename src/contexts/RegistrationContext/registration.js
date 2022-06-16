import PropTypes from "prop-types";

export const registration = (
                                 username, // must be unique
                                  // must contain at least 6 characters
                                 email,
                                 password,// must be a unique, valid email address
                                 isVegan,
                                 isVegetarian,
                                 isGlutenfree,
                                 isLaktosefree
                             ) => {
    const user = {
        username: username,
        email: email,
        password: password,
        vegan: isVegan,
        vegetarian: isVegetarian,
        glutenfree: isGlutenfree,
        lactosefree: isLaktosefree,
    };
    console.log(user);
    return fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then((res) => {
        console.log(res);
        if (!res.ok) {
            throw new Error("registration failed");
        }
        return res.json();
    });
};

/*user.propTypes = {
    children: PropTypes.node,
    hint: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};*/