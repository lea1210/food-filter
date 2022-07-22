import React, { useContext, useState } from 'react';
import { registration } from './registration';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

export const RegistrationContext = React.createContext(undefined);

export function RegistrationContextProvider({ children }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const nav = useNavigate();

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
        if (result !== null) {
          nav('/');
        }
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
