import Styles from "../Login/Login.module.css";
import LoginButton from "../LoginButton/LoginButton";
import LoginForm from "../LoginForm/LoginForm";
import {LoginFormContext, useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";

export const Login = () => {
    const isLoginFormOpened = useLoginForm();


    return (
        <>
            {isLoginFormOpened && (
                <div>
                    <LoginForm/>
                    <LoginButton/>
                </div>
            )}
        </>
    );
};