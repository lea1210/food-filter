import React, {useContext, useState} from "react";

export const ExcludedContext = React.createContext(undefined);

export function ExcludedContextProvider({children}) {
    const [excludedList, setExcludedList] = useState([]);

    const addExcluded = (newExcluded) => {
        const newList = [...excludedList];
        newList.push({name: newExcluded, id:newExcluded});
        setExcludedList(newList);
    }

    const deleteExcluded = (index) => {
        const newList = [...excludedList];
        newList.splice(index,1);
        setExcludedList(newList);
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