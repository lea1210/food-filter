import React from "react";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import { useLogin } from "../../contexts/LoginContext/LoginContext";
import Styles from "../LoginButton/LoginButton.module.css";
import {useCallback, useState} from "react";
import formField from "../FormField/FormField";

const LoginForm = ({onSubmit, setIsOpen}) => {
    console.log("set is open in loginform: ", setIsOpen);
   // const { isLoggedIn, login, logout } = useLogin();
   // const [password, setPassword] = useState('');
   // const [user, setUser] = useState('');


   /* const onSubmitLoginForm = useCallback((formFields) => {
        console.log("halllllllllo");
        if (isLoggedIn){
            logout();
        } else{
            console.log("submit funktion");
            login(formFields["username"], formFields["password"]);
        }
        setIsOpen(true);
    }, [user, password, login])*/

    return (
        <>
        <Form testID="loginForm" onSubmit={onSubmit} setIsOpen={setIsOpen()}>
            <FormField
                pattern={/.{2,42}/}
                errorMessage="Bitte gib deinen Usernamen an"
                name="username"
                label="Username"
                type="text"
                required
            />

            <FormField
                pattern={/.{6,42}/}
                errorMessage="Bitte gib dein Passwort an"
                name="password"
                label="Passwort"
                type="password"
                required
            />
            <button className={Styles.loginButton} type="submit">
                Loginnnn
            </button>
        </Form>
        </>
    );
};

export default LoginForm;

