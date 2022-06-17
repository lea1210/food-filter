import React, {useContext, useState} from "react";

export const IngredientContext = React.createContext(undefined);

export function IngredientContextProvider({children}) {
    const [ingredientList, setIngredientList] = useState([]);

    const addIngredient = (newIngredient) => {
        if(newIngredient !== "") {
            const newList = [...ingredientList];
            newList.push({name: newIngredient, id: newIngredient});
            setIngredientList(newList);
        }
    }

    const deleteIngredient = (name) => {
        const newList = [...ingredientList];
        for( let i = 0; i < newList.length; i++){
            if ( newList[i].name === name) {
                newList.splice(i, 1);
            }
        }
        setIngredientList(newList);
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