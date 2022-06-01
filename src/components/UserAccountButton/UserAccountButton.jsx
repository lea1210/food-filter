import Styles from "./UserAccountButton.module.css";
import {LoginFormContext, useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";

export const UserAccountButton = () => {
    const {openLoginForm, closeLoginForm, isLoginFormOpened} = useLoginForm();

    const onClick = () => {
        if (isLoginFormOpened) closeLoginForm();
        else openLoginForm();
    };

    return (
        <div className={Styles.userAccount}>
           <button className={Styles.userAccountBtn} onClick={onClick}>
               <img src="icons/user.png" alt="userinfo" className={Styles.userAccountIcon} />
           </button>
        </div>
    );
};