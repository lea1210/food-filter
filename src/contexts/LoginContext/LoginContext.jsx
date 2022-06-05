import React, {useContext, useState} from "react";
import {getToken, login, logout} from "./login";

export const LoginContext = React.createContext(undefined);

export function LoginContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

    /*const userData = isLoggedIn ? {
        userName: 'foodspecialist',
        firstName: 'Frank',
        lastName: 'Foodi'
    } : {}*/

    const handleLogin = (user, password) => {
        login(user, password).then((result) => setIsLoggedIn(result));
    }

    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
    };

    return (
        <LoginContext.Provider
            value={{
                login: handleLogin,
                logout: handleLogout,
                getToken,
                isLoggedIn,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

export const useLogin = () => useContext(LoginContext);