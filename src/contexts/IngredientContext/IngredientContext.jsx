import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const IngredientContext = React.createContext(undefined);

export function IngredientContextProvider({ children }) {
  const [ingredientList, setIngredientList] = useState([]);

  /**
   * add ingredient to ingredientlist
   * @param newIngredient
   */
  const addIngredient = (newIngredient) => {
    if (newIngredient !== '') {
      const newList = [...ingredientList];
      newList.push({ name: newIngredient, id: newIngredient });
      setIngredientList(newList);
    }
  };

  /**
   * delete ingredient from ingredientlist
   * @param name
   */
  const deleteIngredient = (name) => {
    const newList = [...ingredientList];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].name === name) {
        newList.splice(i, 1);
      }
    }
    setIngredientList(newList);
  };

  return (
    <IngredientContext.Provider
      value={{
        setIngredientList,
        ingredientList,
        addIngredient,
        deleteIngredient
      }}>
      {children}
    </IngredientContext.Provider>
  );
}

export const useIngredients = () => useContext(IngredientContext);

IngredientContextProvider.defaultProps = {
  children: undefined
};

IngredientContextProvider.propTypes = {
  children: PropTypes.node
};
