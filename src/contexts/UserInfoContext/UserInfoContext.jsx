import React, {useContext, useState} from "react";

export const UserInfoContext = React.createContext(undefined);

export function UserInfoContextProvider({children}) {
    const [isUserInfoOpened, setIsUserInfoOpened] = useState(false);
    const [isUpdated, setIsUpdated] = useState(false);

    const openUserInfo = () => {
        setIsUserInfoOpened(true);
    };
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
                isUpdated,
            }}
        >
            {children}
        </UserInfoContext.Provider>
    );
}

export const useUser = () => useContext(UserInfoContext);