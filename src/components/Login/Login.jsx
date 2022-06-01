import Styles from "../Login/Login.module.css";
import LoginButton from "../LoginButton/LoginButton";
import LoginForm from "../LoginForm/LoginForm";
import {LoginFormContext, useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";
import UserInfo from "../UserInfo/UserInfo";
import {useLogin} from "../../contexts/LoginContext/LoginContext";
import {useState} from "react";

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {isLoginFormOpened, closeLoginForm} = useLoginForm();
    const { isLoggedIn, logIn, logOut } = useLogin();

    const onClick = () => {
        if (isLoggedIn){
            logOut();
        } else{
            logIn();
        }
        setIsOpen(true);
        //closeLoginForm();
    }

    return (
        <>
            {isLoginFormOpened && (
                <div className={Styles.loginWindow}>
                    <LoginForm className={Styles.loginForm}/>
                    <LoginButton onClick={onClick}/>
                    {isOpen && <UserInfo setIsOpen={setIsOpen}/>}
                </div>
            )}
        </>
    );
};

export default Login;
