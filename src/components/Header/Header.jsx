import Styles from "./Header.module.css";
import {UserAccountButton} from "../UserAccountButton/UserAccountButton";

export const Header = () => {
    return (
        <div className={Styles.header}>
            <UserAccountButton/>
            <h1 className={Styles.headerText}>FoodFilter</h1>
        </div>
    );
};
