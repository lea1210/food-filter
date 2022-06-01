import Styles from "../Login/Login.module.css";
import LoginButton from "../LoginButton/LoginButton";
import LoginForm from "../LoginForm/LoginForm";
import {LoginFormContext, useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";

const Login = () => {
    const {isLoginFormOpened} = useLoginForm();


    return (
        <>
            {isLoginFormOpened && (
                <div className={Styles.loginWindow}>
                    <LoginForm className={Styles.loginForm}/>
                    <LoginButton/>
                </div>
            )}
        </>
    );
};

export default Login;
