import React, {useContext, useState} from "react";
import Styles from "./UserInfo.module.css";
import {LoginContext, useLogin} from "../../contexts/LoginContext/LoginContext";
import {useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";

const UserInfo = ({setIsOpen}) => {
    const {isLoggedIn, userName} = useLogin();

    return (
        <>
            {isLoggedIn&& (

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
                                <button className={Styles.saveButton} onClick={() => setIsOpen(false)}>Speichern</button>
                                <button className={Styles.cancelButton} onClick={() => setIsOpen(false)}>Abbrechen</button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default UserInfo;
