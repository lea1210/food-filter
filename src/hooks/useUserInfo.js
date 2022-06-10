import {getToken} from "../contexts/LoginContext/login";

const API_URL = "http://localhost:1337/api/users";
const KEY_USER = "user";

const updateUser = async (id, vegan, vegetarian, lactosefree, glutenfree) => {
    return fetch(API_URL + "/" + id, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${getToken()}`,
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
                console.log("antwort nicht ok");
                return null;
            }
            return res.json();
        })
};

export const setNewUserInfo = async (id, vegan, vegetarian, lactosefree, glutenfree) => {
    console.log("id: ", id);
    console.log("vegan: ", vegan);
    console.log("vegetarian: ", vegetarian);
    console.log("lactosefree: ", lactosefree);
    console.log("glutenfree: ", glutenfree);
    const userData = await updateUser(id, vegan, vegetarian, lactosefree, glutenfree);
    console.log(userData);
    if (userData) {
        localStorage.setItem(KEY_USER, JSON.stringify(userData));
        console.log(localStorage.getItem(KEY_USER));
        return true;
    } else {
        return false;
    }
};
