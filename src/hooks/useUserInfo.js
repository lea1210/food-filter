const API_URL = "http://localhost:1337/api/users/";
const KEY_USER = "user";

const updateUser = async (id, vegan, vegetarian, lactosefree, glutenfree) => {
    const result = await fetch(API_URL + "/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            vegan: vegan,
            vegetarian: vegetarian,
            lactosefree: lactosefree,
            glutenfree: glutenfree,
        }),
    })
        .then((res) => {
            if (!res.ok) {
                console.log("antwort nichnok");
                return null;
            }
            return res.json();
        })
        .then((data) => ({
            user: data.user,
        }));
};

export const setNewUserInfo = async (id, vegan, vegetarian, lactosefree, glutenfree) => {
    const userData = await updateUser(id, vegan, vegetarian, lactosefree, glutenfree);
    if (userData) {
       // localStorage.setItem(KEY_TOKEN, authData.token);
        localStorage.setItem(KEY_USER, JSON.stringify(userData.user));
        console.log(localStorage.getItem(KEY_USER));
        return true;
    } else {
        return false;
    }
};
