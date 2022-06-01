import React, {useContext, useState} from "react";
import Styles from "./UserInfo.module.css";
import {LoginContext, useLogin} from "../../contexts/LoginContext/LoginContext";
import {useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";

const UserInfo = () => {
    const {isLoggedIn, userName} = useLogin();
    //const {userInfoOpen, setUserInfoOpen} = useState(true); extra userinfo context?


    const onClick = () => {
       // setUserInfoOpen(false);
    };


    return (
        <>
            {isLoggedIn&& (

                <div className={Styles.userInfoBackdrop}>
                    <div className={Styles.userInfo}>
                        <div className={Styles.userInfoContent}>
                            <div className={Styles.close} onClick={onClick}></div>
                            <img alt="user image" src="icons/user.png"/>
                            <div>{userName}</div>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default UserInfo;
