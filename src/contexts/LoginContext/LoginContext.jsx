import React, {useContext, useState} from "react";
import {getToken, getUser,login, logout} from "./login";
import {usePreferences} from "../PreferencesContext/PreferencesContext";

export const LoginContext = React.createContext(undefined);

export function LoginContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());
    const [user, setUser] = useState(undefined);
    const { handleChangeVegan, handleChangeVegetarian, handleChangeGlutenfree, handleChangeLactosefree} = usePreferences();

    const handleLogin = async (user, password) => {
        return await login(user, password)
             .then((result) => {
                 setIsLoggedIn(result);
                 return result;
             });
    }

    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
        handleChangeVegan(false);
        handleChangeVegetarian(false);
        handleChangeGlutenfree(false);
        handleChangeLactosefree(false);
    };

    return (
        <LoginContext.Provider
            value={{
                login: handleLogin,
                logout: handleLogout,
                getToken,
                getUser,
                isLoggedIn,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

export const useLogin = () => useContext(LoginContext);