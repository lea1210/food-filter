import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ExcludedContext = React.createContext(undefined);

export function ExcludedContextProvider({ children }) {
  const [excludedList, setExcludedList] = useState([]);

  /**
   * add new ingredient to list of excluded ingredients
   * @param newExcluded
   */
  const addExcluded = (newExcluded) => {
    if (newExcluded !== '') {
      const newList = [...excludedList];
      newList.push({ name: newExcluded, id: newExcluded });
      setExcludedList(newList);
    }
  };

  /**
   * delete ingredient from list of excluded ingredients
   * @param name
   */
  const deleteExcluded = (name) => {
    const newList = [...excludedList];
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].name === name) {
        newList.splice(i, 1);
      }
    }
    setExcludedList(newList);
  };

  return (
    <ExcludedContext.Provider
      value={{
        setExcludedList,
        excludedList,
        addExcluded,
        deleteExcluded
      }}>
      {children}
    </ExcludedContext.Provider>
  );
}

export const useExcludedIngredients = () => useContext(ExcludedContext);

ExcludedContextProvider.defaultProps = {
  children: undefined
};

ExcludedContextProvider.propTypes = {
  children: PropTypes.node
};
