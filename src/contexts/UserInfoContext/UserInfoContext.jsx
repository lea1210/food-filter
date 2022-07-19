import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserInfoContext = React.createContext(undefined);

export function UserInfoContextProvider({ children }) {
  const [isUserInfoOpened, setIsUserInfoOpened] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  /**
   * open user info
   */
  const openUserInfo = () => {
    setIsUserInfoOpened(true);
  };

  /**
   * close user info
   */
  const closeUserInfo = () => {
    setIsUserInfoOpened(false);
  };

  return (
    <UserInfoContext.Provider
      value={{
        isUserInfoOpened,
        openUserInfo,
        closeUserInfo,
        setIsUpdated,
        isUpdated
      }}>
      {children}
    </UserInfoContext.Provider>
  );
}

export const useUser = () => useContext(UserInfoContext);

UserInfoContextProvider.defaultProps = {
  children: undefined
};

UserInfoContextProvider.propTypes = {
  children: PropTypes.node
};
