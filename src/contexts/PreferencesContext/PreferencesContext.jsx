import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PreferencesContext = React.createContext(undefined);

export function PreferencesContextProvider({ children }) {
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isGlutenfree, setIsGlutenfree] = useState(false);
  const [isLactosefree, setIsLactosefree] = useState(false);

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
        isLactosefree
      }}>
      {children}
    </PreferencesContext.Provider>
  );
}

export const usePreferences = () => useContext(PreferencesContext);

PreferencesContextProvider.defaultProps = {
  children: undefined
};

PreferencesContextProvider.propTypes = {
  children: PropTypes.node
};
