import React, {useContext} from "react";
import Styles from "./UserInfo.module.css";
import {LoginContext, useLogin} from "../../contexts/LoginContext/LoginContext";

const UserInfo = () => {
    const {isLoggedIn, userName} = useLogin()

    return (
        <>
            {isLoggedIn && (
                <div className={Styles.userInfo}>
                    <div className={Styles.userInfoContent}>
                        <img className={Styles.userImage} alt="user image" src="icons/user.png"/>
                        <div>{userName}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserInfo;
