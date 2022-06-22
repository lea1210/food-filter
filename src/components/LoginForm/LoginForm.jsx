import React from "react";
import FormField from "../FormField/FormField";
import Styles from "../LoginForm/LoginForm.module.css";

import {
    FormContextProvider,
    useForm,
} from "../../contexts/FormContext/FormContext";
import {useLogin} from "../../contexts/LoginContext/LoginContext";
import {useState} from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import {useUser} from "../../contexts/UserInfoContext/UserInfoContext";
import {useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";
import {Link} from "react-router-dom";
import {Navigate} from "react-router-dom";

const FormContextWrapper = ({ children, setIsOpen}) => {
    return (
        <FormContextProvider>
            <LoginForm setIsOpen={setIsOpen}>{children}</LoginForm>
        </FormContextProvider>
    );
};

const LoginForm = () => {
    const {closeLoginForm} = useLoginForm();
    const {openUserInfo, isUserInfoOpened} = useUser();
    const { validate, formFields } = useForm();
    const { isLoggedIn, login } = useLogin();

    const submit = (event) => {
        event.preventDefault();

        if (validate()) {
            login(formFields["username"].value, formFields["password"].value).then((result) => {
                    if(result){
                        closeLoginForm();
                        openUserInfo();
                    }
                });
        }
    };


    return (
        <>
        <form onSubmit={submit}>
            <FormField
                pattern={/.{2,42}/}
                errorMessage="Bitte gib deinen Usernamen an."
                name="username"
                label="Username"
                type="text"
                required
            />

            <FormField
                pattern={/.{6,42}/}
                errorMessage="Dein Passwort ist mindestens 6 Zeichen lang."
                name="password"
                label="Passwort"
                type="password"
                required
            />
            <button className={Styles.loginButton} type="submit">
                Login
            </button>
            <br/>
            <label className={Styles.registerLabel}>Noch kein Konto? Jetzt </label>
            <Link className={Styles.registerLink} to="/register">registrieren</Link>
        </form>

        </>
    );
};


export default FormContextWrapper;

