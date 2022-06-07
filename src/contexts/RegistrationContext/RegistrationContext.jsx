import React, {useContext, useState} from "react";
import {registration} from "./registration";

export const RegistrationContext = React.createContext(undefined);

export function RegistrationContextProvider({children}) {
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegistration = (user, password, email, isVegan, isVegetarian, isGlutenfree, isLaktosefree) => {
        registration(user,email,password, isVegan, isVegetarian, isGlutenfree, isLaktosefree).then((result) => {
            setIsRegistered(result);
        });
    }

    return (
        <RegistrationContext.Provider
            value={{
                registration: handleRegistration,
                isRegistered,
            }}
        >
            {children}
        </RegistrationContext.Provider>
    );
}

export const useRegistration = () => useContext(RegistrationContext);