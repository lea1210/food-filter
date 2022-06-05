import Styles from "./Header.module.css";
import {UserAccountButton} from "../UserAccountButton/UserAccountButton";
import Login from "../Login/Login";
import {useState} from "react";

export const Header = () => {
  //  const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={Styles.header}>
            <UserAccountButton/>
            <h1 className={Styles.headerText}>FoodFilter</h1>
            <Login/>
        </header>
    );
};
