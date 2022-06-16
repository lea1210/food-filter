import React, {useContext, useState} from "react";

export const ExcludedContext = React.createContext(undefined);

export function ExcludedContextProvider({children}) {
    const [excludedList, setExcludedList] = useState([]);

    const addExcluded = (newExcluded) => {
        excludedList.push({name: newExcluded, id:newExcluded});
    }

    const deleteExcluded = (index) => {
        excludedList.splice(index,1);
    }


    return (
        <ExcludedContext.Provider
            value={{
                setExcludedList,
                excludedList,
                addExcluded,
                deleteExcluded
            }}
        >
            {children}
        </ExcludedContext.Provider>
    );
}

export const useExcludedIngredients = () => useContext(ExcludedContext);