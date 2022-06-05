import React from "react";
import FormField from "../FormField/FormField";
import Styles from "../LoginForm/LoginForm.module.css";

import {
    FormContextProvider,
    useForm,
} from "../../contexts/FormContext/FormContext";
import {useLogin} from "../../contexts/LoginContext/LoginContext";

const FormContextWrapper = ({ children, setIsOpen}) => {
    return (
        <FormContextProvider>
            <LoginForm setIsOpen={setIsOpen}>{children}</LoginForm>
        </FormContextProvider>
    );
};

const LoginForm = ({setIsOpen}) => {
    console.log("set is open in loginform: ", setIsOpen);
    const { validate, formFields } = useForm();
    const { isLoggedIn, login, logout } = useLogin();

    const submit = (event) => {
        console.log("im submit??");
        event.preventDefault();
        // skip submitting if validation fails
        if (validate()) {
            console.log("validierung war erfolgreichhh");
            // onSubmit(formFields);

            console.log("submit funktion, name: ", formFields["username"]);
            login(formFields["username"].value, formFields["password"].value);

            console.log(setIsOpen);
            setIsOpen(true);
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
            <a href className={Styles.registerLink}>registrieren</a>
        </form>
        </>
    );
};


export default FormContextWrapper;

