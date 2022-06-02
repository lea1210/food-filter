import React from "react";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import { useLogin } from "../../contexts/LoginContext/LoginContext";
import Styles from "../LoginButton/LoginButton.module.css";
import {useForm} from "../../contexts/FormContext/FormContext";

const LoginForm = ({setIsOpen}) => {
    //const { username, password } = useLogin();
    const { isLoggedIn, login, logout } = useLogin();
    const { formFields } = useForm();


    const onClick = () => {
        if (isLoggedIn){
            logout();
        } else{
            login( formFields["username"],  formFields["password"]);
        }
        setIsOpen(true);
        //closeLoginForm();
    }

    return (
        <>
        <Form onSubmit={setIsOpen(true)} testID="loginForm">
            <FormField
                pattern={/.{2,42}/}
                errorMessage="Bitte gib deinen Usernamen an"
                name="username"
                label="Username"
                type="text"
                required
            />

            <FormField
                pattern={/^.{0,255}$/}
                errorMessage="Bitte gib dein Passwort an"
                name="password"
                label="Passwort"
                type="password"
                required
            />
        </Form>
        <button onClick={onClick} className={Styles.loginButton} type={"submit"}>
            Login
        </button>
        </>
    );
};

export default LoginForm;

