import React, { useContext, useState } from 'react';
import { registration } from './registration';
import PropTypes from 'prop-types';

export const RegistrationContext = React.createContext(undefined);

export function RegistrationContextProvider({ children }) {
  const [isRegistered, setIsRegistered] = useState(false);

  /**
   * call register function
   * @param user
   * @param password
   * @param email
   * @param isVegan
   * @param isVegetarian
   * @param isGlutenfree
   * @param isLaktosefree
   */
  const handleRegistration = (
    user,
    password,
    email,
    isVegan,
    isVegetarian,
    isGlutenfree,
    isLaktosefree
  ) => {
    registration(user, email, password, isVegan, isVegetarian, isGlutenfree, isLaktosefree).then(
      (result) => {
        setIsRegistered(result);
      }
    );
  };

  return (
    <RegistrationContext.Provider
      value={{
        registration: handleRegistration,
        isRegistered
      }}>
      {children}
    </RegistrationContext.Provider>
  );
}

export const useRegistration = () => useContext(RegistrationContext);

RegistrationContextProvider.defaultProps = {
  children: undefined
};

RegistrationContextProvider.propTypes = {
  children: PropTypes.node
};
