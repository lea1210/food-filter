import Styles from "./Header.module.css";
import {UserAccountButton} from "../UserAccountButton/UserAccountButton";
import UserInfo from "../UserInfo/UserInfo";
import {Login} from "../Login/Login";

export const Header = () => {
    return (
        <header className={Styles.header}>
            <UserAccountButton/>
            <h1 className={Styles.headerText}>FoodFilter</h1>
            <Login/>
            <UserInfo/>
        </header>
    );
};
