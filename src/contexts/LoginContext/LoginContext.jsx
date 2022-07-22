import React, { useContext, useState } from 'react';
import { getToken, getUser, login, logout } from './login';
import { usePreferences } from '../PreferencesContext/PreferencesContext';
import PropTypes from 'prop-types';

export const LoginContext = React.createContext(undefined);

export function LoginContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());
  const [isLogginIn, setIsLogginIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const {
    handleChangeVegan,
    handleChangeVegetarian,
    handleChangeGlutenfree,
    handleChangeLactosefree
  } = usePreferences();

  /**
   * login via API call
   * @param user
   * @param password
   * @returns {Promise<boolean>}
   */
  const handleLogin = async (user, password) => {
    resetError();
    return await login(user, password).then((result) => {
      setIsLoggedIn(result);
      setIsLogginIn(false);
      setLoginError(!result);
      return result;
    });
  };

  /**
   * logout and reset preferences
   */
  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    handleChangeVegan(false);
    handleChangeVegetarian(false);
    handleChangeGlutenfree(false);
    handleChangeLactosefree(false);
  };

  const resetError = () => {
    setLoginError(false);
  };

  return (
    <LoginContext.Provider
      value={{
        login: handleLogin,
        logout: handleLogout,
        getToken,
        getUser,
        loginError,
        resetError,
        isLoggedIn,
        isLogginIn
      }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLogin = () => useContext(LoginContext);

LoginContextProvider.defaultProps = {
  children: undefined
};

LoginContextProvider.propTypes = {
  children: PropTypes.node
};
