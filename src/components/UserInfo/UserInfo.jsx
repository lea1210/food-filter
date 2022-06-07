import React, {useContext, useState} from "react";
import Styles from "./UserInfo.module.css";
import {LoginContext, useLogin} from "../../contexts/LoginContext/LoginContext";
import {useUserInfo} from "../../contexts/UserInfoContext/UserInfoContext";

const UserInfo = ({setIsOpen}) => {
    const { userName, logout} = useLogin();
    const { closeUserInfo, isUserInfoOpened} = useUserInfo();

    const onClickLogout= () =>{
        logout();
        closeUserInfo();
    }

    return (
        <>
            {isUserInfoOpened&& (

                <div className={Styles.userInfoBackdrop}>
                    <div className={Styles.userInfo}>
                        <div className={Styles.userInfoContent}>
                            <img className={Styles.profileImg} alt="user image" src="icons/user_green.png"/>
                            <div className={Styles.headline}>{userName}</div>
                            <label>Deine Präferenzen: </label>
                            <div className={Styles.preferences}>
                                <p>bla</p>
                                <p>bla</p>
                                <p>bla</p>
                            </div>
                            <div className={Styles.buttonBox}>
                                <button className={Styles.saveButton} onClick={closeUserInfo}>Speichern</button>
                                <button className={Styles.logoutButton} onClick={onClickLogout}>Logout</button>
                                <button className={Styles.cancelButton} onClick={closeUserInfo}>Abbrechen</button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default UserInfo;
