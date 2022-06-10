import Styles from "../Login/Login.module.css";
import {useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";
import UserInfo from "../UserInfo/UserInfo";
import LoginForm from "../LoginForm/LoginForm";
import {useUserInfo} from "../../contexts/UserInfoContext/UserInfoContext";

const Login = () => {
    const {isUserInfoOpened} = useUserInfo();
    const {isLoginFormOpened} = useLoginForm();

    return (
        <>
            {isLoginFormOpened && (
                <div className={Styles.loginWindow}>
                    <LoginForm/>
                    {isUserInfoOpened && <UserInfo/>}
                </div>
            )}
        </>
    );
};

export default Login;


