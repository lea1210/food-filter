import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoginFormContext = React.createContext(undefined);

export function LoginFormContextProvider({ children }) {
  const [isLoginFormOpened, setIsLoginFormOpened] = useState(false);

  /**
   * open login form
   */
  const openLoginForm = () => {
    setIsLoginFormOpened(true);
  };

  /**
   * close login form
   */
  const closeLoginForm = () => {
    setIsLoginFormOpened(false);
  };

  return (
    <LoginFormContext.Provider
      value={{
        isLoginFormOpened,
        openLoginForm,
        closeLoginForm
      }}>
      {children}
    </LoginFormContext.Provider>
  );
}

export const useLoginForm = () => useContext(LoginFormContext);

LoginFormContextProvider.defaultProps = {
  children: undefined
};

LoginFormContextProvider.propTypes = {
  children: PropTypes.node
};
