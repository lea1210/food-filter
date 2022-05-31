import Styles from "./UserAccountButton.module.css";
import {LoginFormContext, useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";

export const UserAccountButton = () => {
    const {openLoginForm} = useLoginForm()

    const onClick = () => {
        console.log("useracc öffnen");
        openLoginForm();
    };

    return (
        <div className={Styles.userAccount}>
           <button className={Styles.userAccountBtn} onClick={onClick}>
               <img src="icons/user.png" alt="userinfo" className={Styles.userAccountIcon} />
           </button>
        </div>
    );
};