import React, {useContext, useState} from "react";
import {registration} from "./registration";

export const RegistrationContext = React.createContext(undefined);

export function RegistrationContextProvider({children}) {
    const [isRegistered, setIsRegistered] = useState(false);

    /*const userData = isLoggedIn ? {
        userName: 'foodspecialist',
        firstName: 'Frank',
        lastName: 'Foodi'
    } : {}*/

    const handleRegistration = (user, email, password) => {
        registration(user,password, email).then((result) => setIsRegistered(result));
    }

    return (
        <RegistrationContext.Provider
            value={{
                registration: handleRegistration,
            }}
        >
            {children}
        </RegistrationContext.Provider>
    );
}

export const useRegistration = () => useContext(RegistrationContext);