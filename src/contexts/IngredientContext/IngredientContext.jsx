import React, {useContext, useState} from "react";

export const IngredientContext = React.createContext(undefined);

export function IngredientContextProvider({children}) {
    const [ingredientList, setIngredientList] = useState([]);

    const addIngredient = (newIngredient) => {
        ingredientList.push({name: newIngredient, id:newIngredient});
    }

    const deleteIngredient = (index) => {
        ingredientList.splice(index,1);
    }

    return (
        <IngredientContext.Provider
            value={{
                setIngredientList,
                ingredientList,
                addIngredient,
                deleteIngredient,
            }}
        >
            {children}
        </IngredientContext.Provider>
    );
}

export const useIngredients = () => useContext(IngredientContext);