import React, {useContext, useState} from "react";

export const PreferencesContext = React.createContext(undefined);

export function PreferencesContextProvider({children}) {
    const [preferences, setPreferences] = useState([{name: "vegan", value: false}, {name: "vegetarian", value: false}, {name: "glutenfree", value: false}, {name: "lactosefree", value: false}]);

    const handleChangePreferences = (name, value) => {
        const newPref = [...preferences];
        for( let i = 0; i < newPref.length; i++){
            if ( newPref[i].name === name) {
                newPref[i].value = value;
            }
        }
        setPreferences(newPref);
    }


    return (
        <PreferencesContext.Provider
            value={{
                preferences,
                changePreferences: handleChangePreferences,
            }}
        >
            {children}
        </PreferencesContext.Provider>
    );
}

export const usePreferences = () => useContext(PreferencesContext);