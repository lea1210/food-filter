import Styles from "./Header.module.css";
import {UserAccountButton} from "../UserAccountButton/UserAccountButton";
import Login from "../Login/Login";
import {useState} from "react";
import {useLogin} from "../../contexts/LoginContext/LoginContext";
import UserInfo from "../UserInfo/UserInfo";
import {useUserInfo} from "../../contexts/UserInfoContext/UserInfoContext";

export const Header = () => {
    const {isUserInfoOpened} = useUserInfo();
    const {isLoggedIn} = useLogin();

    return (
        <header className={Styles.header}>
            <UserAccountButton/>
            <h1 className={Styles.headerText}>FoodFilter</h1>
            {isLoggedIn
                ? isUserInfoOpened && <UserInfo/>
                : <Login/>
            }

        </header>
    );
};
