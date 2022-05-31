import React, {useContext, useState} from "react";

export const LoginFormContext = React.createContext(undefined);

export function LoginFormContextProvider({children}) {
    const [isLoginFormOpened, setIsLoginFormOpened] = useState(false);
    const openLoginForm = () => {
        setIsLoginFormOpened(true);
    };
    const closeLoginForm = () => {
        setIsLoginFormOpened(false);
    };

  /*  const userData = isLoginFormOpened ? {
        userName: 'foodspecialist',
        firstName: 'Frank',
        lastName: 'Foodi'
    } : {}*/

    return (
        <LoginFormContext.Provider
            value={{
                isLoginFormOpened,
                openLoginForm,
                closeLoginForm
               // ...userData
            }}
        >
            {children}
        </LoginFormContext.Provider>
    );
}

export const useLoginForm = () => useContext(LoginFormContext);