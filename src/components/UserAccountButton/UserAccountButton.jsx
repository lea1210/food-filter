import Styles from "./UserAccountButton.module.css";
import {useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";
import {useUserInfo} from "../../contexts/UserInfoContext/UserInfoContext";
import {useLogin} from "../../contexts/LoginContext/LoginContext";

export const UserAccountButton = () => {
    const {openLoginForm, closeLoginForm, isLoginFormOpened} = useLoginForm();
    const {openUserInfo} = useUserInfo();
    const {isLoggedIn} = useLogin();

    const onClick = () => {
        if(isLoggedIn){
            openUserInfo();
        }else{
            if (isLoginFormOpened){
                closeLoginForm();
            } else{
                openLoginForm();
            }
        }
    };

    return (
        <div className={Styles.userAccount}>
           <button className={Styles.userAccountBtn} onClick={onClick}>
               <img src="icons/user.png" alt="userinfo" className={Styles.userAccountIcon} />
           </button>
        </div>
    );
};