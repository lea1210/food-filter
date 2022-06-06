import React from "react";
import FormField from "../FormField/FormField";
import Styles from "../LoginForm/LoginForm.module.css";

import {
    FormContextProvider,
    useForm,
} from "../../contexts/FormContext/FormContext";
import {useLogin} from "../../contexts/LoginContext/LoginContext";
import {useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";
import {useState} from "react";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const FormContextWrapper = ({ children, setIsOpen}) => {
    return (
        <FormContextProvider>
            <LoginForm setIsOpen={setIsOpen}>{children}</LoginForm>
        </FormContextProvider>
    );
};

const LoginForm = ({setIsOpen}) => {
    const [isOpenRegisterForm, setIsOpenRegisterForm] = useState(false);
    const {closeLoginForm} = useLoginForm();
    const { validate, formFields } = useForm();
    const { isLoggedIn, login, logout } = useLogin();

    const submit = (event) => {
        event.preventDefault();

        if (validate()) {
            login(formFields["username"].value, formFields["password"].value);

            console.log(setIsOpen);
            setIsOpen(true);
            //closeLoginForm();
        }
    };

    const onClickRegister = () => {
        setIsOpenRegisterForm(true);
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
            <label className={Styles.registerLink} onClick={onClickRegister}>registrieren</label>
            {isOpenRegisterForm && (
                    <RegistrationForm setIsOpenRegisterForm={setIsOpenRegisterForm}/>
            )}
        </form>
        </>
    );
};


export default FormContextWrapper;

