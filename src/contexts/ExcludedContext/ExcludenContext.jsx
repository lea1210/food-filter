import React, {useContext, useState} from "react";

export const ExcludedContext = React.createContext(undefined);

export function ExcludedContextProvider({children}) {
    const [excludedList, setExcludedList] = useState([]);

    return (
        <ExcludedContext.Provider
            value={{
                setExcludedList,
                excludedList,
            }}
        >
            {children}
        </ExcludedContext.Provider>
    );
}

export const useExcludedIngredients = () => useContext(ExcludedContext);