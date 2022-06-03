import React, {useContext, useState} from "react";

export const LoginContext = React.createContext(undefined);

export function LoginContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const logIn = () => {
        setIsLoggedIn(true);
    };
    const logOut = () => {
        setIsLoggedIn(false);
    };

    const userData = isLoggedIn ? {
        userName: 'foodspecialist',
        firstName: 'Frank',
        lastName: 'Foodi'
    } : {}

    return (
        <LoginContext.Provider
            value={{
                isLoggedIn,
                logIn,
                logOut,
                ...userData
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

export const useLogin = () => useContext(LoginContext);