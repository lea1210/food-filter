import React, {useContext, useEffect, useState} from "react";
import {useLogin} from "../LoginContext/LoginContext";
import {getUser} from "../LoginContext/login";

export const PreferencesContext = React.createContext(undefined);

export function PreferencesContextProvider({children}) {
    const isLoggedIn = useLogin();
    const user = getUser();
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isGlutenfree, setIsGlutenfree] = useState(false);
    const [isLactosefree, setIsLactosefree] = useState(false);


    return (
        <PreferencesContext.Provider
            value={{
                handleChangeVegan: setIsVegan,
                handleChangeVegetarian: setIsVegetarian,
                handleChangeGlutenfree: setIsGlutenfree,
                handleChangeLactosefree: setIsLactosefree,
                isVegan,
                isVegetarian,
                isGlutenfree,
                isLactosefree,
            }}
        >
            {children}
        </PreferencesContext.Provider>
    );
}

export const usePreferences = () => useContext(PreferencesContext);