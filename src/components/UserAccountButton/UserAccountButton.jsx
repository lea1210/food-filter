import Styles from "./UserAccountButton.module.css";

export const UserAccountButton = () => {
    const onClick = () => {
        console.log("useracc öffnen");
    };

    return (
        <div className={Styles.userAccount}>
           <button className={Styles.userAccountBtn} onClick={onClick}>
               <img src="icons/user.png" alt="userinfo" className={Styles.userAccountIcon} />
           </button>
        </div>
    );
};