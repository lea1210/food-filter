import React, {useContext, useState} from "react";

export const PreferencesContext = React.createContext(undefined);

export function PreferencesContextProvider({children}) {
   // const [preferences, setPreferences] = useState([{name: "vegan", value: false}, {name: "vegetarian", value: false}, {name: "glutenfree", value: false}, {name: "lactosefree", value: false}]);

    const [isVegan, setIsVegan]= useState(false);
    const [isVegetarian, setIsVegetarian]= useState(false);
    const [isGlutenfree, setIsGlutenfree]= useState(false);
    const [isLactosefree, setIsLactosefree]= useState(false);


   /* const handleChangePreferences = (name, value) => {
        const newPref = [...preferences];
        for( let i = 0; i < newPref.length; i++){
            if ( newPref[i].name === name) {
                newPref[i].value = value;
            }
        }
        setPreferences(newPref);
    }*/



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