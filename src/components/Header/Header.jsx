import Styles from "./Header.module.css";

export const Header = () => {
    return (
        <div className={Styles.header}>
            <h1 className={Styles.headerText}>FoodFilter</h1>
        </div>
    );
};
