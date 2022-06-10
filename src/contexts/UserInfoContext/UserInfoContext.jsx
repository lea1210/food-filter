import React, {useContext, useState} from "react";

export const UserInfoContext = React.createContext(undefined);

export function UserInfoContextProvider({children}) {
    const [isUserInfoOpened, setIsUserInfoOpened] = useState(false);

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
                closeUserInfo
                // hier auch noch userinfos??
            }}
        >
            {children}
        </UserInfoContext.Provider>
    );
}

export const useUserInfo = () => useContext(UserInfoContext);