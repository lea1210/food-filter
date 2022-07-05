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

    return (
        <LoginFormContext.Provider
            value={{
                isLoginFormOpened,
                openLoginForm,
                closeLoginForm
            }}
        >
            {children}
        </LoginFormContext.Provider>
    );
}

export const useLoginForm = () => useContext(LoginFormContext);