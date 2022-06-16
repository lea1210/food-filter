import React, {useContext, useState} from "react";

export const IngredientContext = React.createContext(undefined);

export function IngredientContextProvider({children}) {
    const [ingredientList, setIngredientList] = useState([]);

    return (
        <IngredientContext.Provider
            value={{
                setIngredientList,
                ingredientList,
            }}
        >
            {children}
        </IngredientContext.Provider>
    );
}

export const useIngredients = () => useContext(IngredientContext);