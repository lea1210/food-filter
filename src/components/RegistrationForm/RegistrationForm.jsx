import React from "react";
import FormField from "../FormField/FormField";
import Styles from "../RegistrationForm/RegistrationForm.module.css";

import {
    FormContextProvider,
    useForm,
} from "../../contexts/FormContext/FormContext";
import {useRegistration} from "../../contexts/RegistrationContext/RegistrationContext";

const RegistrationFormContextWrapper = ({ children, setIsOpen}) => {
    return (
        <FormContextProvider>
            <RegistrationForm setIsOpen={setIsOpen}>{children}</RegistrationForm>
        </FormContextProvider>
    );
};

const RegistrationForm = () => {
    const { validate, formFields } = useForm();
    const { registration } = useRegistration();

    const submit = (event) => {
        event.preventDefault();

        if (validate()) {
            registration(formFields["username"].value, formFields["password"].value, formFields["email"].value);

           // setIsOpen(true);
            //closeLoginForm();
        }
    };

    return (
        <>
            <form onSubmit={submit}>
                <FormField
                    pattern={/.{2,42}/}
                    errorMessage="Bitte gib einzigartigen Usernamen an."
                    name="username"
                    label="Username"
                    type="text"
                    required
                />
                <FormField
                    pattern={/.{2,42}/}
                    errorMessage="Bitte gib deine E-Mail-Adresse an."
                    name="email"
                    label="E-Mail"
                    type="text"
                    required
                />
                <FormField
                    pattern={/.{6,42}/}
                    errorMessage="Dein Passwort muss mindestens 6 Zeichen lang sein."
                    name="password"
                    label="Passwort"
                    type="password"
                    required
                />
                <button className={Styles.loginButton} type="submit">
                    Registrieren
                </button>
            </form>
        </>
    );
};


export default RegistrationFormContextWrapper;

