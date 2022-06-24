import {useState} from "react";

const AUTH_URL = "http://localhost:1337/api/auth/local";
const KEY_TOKEN = "jwt";
const KEY_USER = "user";

const authenticate = (username, password) => {
    return fetch(AUTH_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            identifier: username,
            password: password,
        }),
    })
        .then((res) => {
            if (!res.ok) {
                console.log("antwort nicht ok");
                return undefined;
            }
            return res.json();
        })
        .then((data) => {
            if(data){
                return {
                    token: data.jwt,
                    user: data.user,
                }
            }
        }
        );
};

export const getToken = () => {
    return localStorage.getItem(KEY_TOKEN) ?? null;
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem(KEY_USER)) ?? null;
};

export const login = async (user, password) => {
    const authData = await authenticate(user, password);
    if (authData) {
        localStorage.setItem(KEY_TOKEN, authData.token);
        localStorage.setItem(KEY_USER, JSON.stringify(authData.user));
        return true;
    } else {
        return false;
    }
};

export const logout = () => {
    localStorage.removeItem(KEY_TOKEN);
    localStorage.removeItem(KEY_USER);
};
