import React, {useState} from "react";
import FormField from "../FormField/FormField";
import Styles from "../RegistrationForm/RegistrationForm.module.css";

import {
    FormContextProvider,
    useForm,
} from "../../contexts/FormContext/FormContext";
import {useRegistration} from "../../contexts/RegistrationContext/RegistrationContext";
import {Checkbox} from "../Checkbox/Checkbox";

const RegistrationFormContextWrapper = ({children, setIsOpenRegisterForm}) => {
    return (
        <FormContextProvider>
            <RegistrationForm setIsOpenRegisterForm={setIsOpenRegisterForm}>{children}</RegistrationForm>
        </FormContextProvider>
    );
};
const emailRegex = new RegExp(
    "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])"
);

const RegistrationForm = ({setIsOpenRegisterForm}) => {
    const {validate, formFields} = useForm();
    const {isRegistered} = useRegistration();
    const {registration} = useRegistration();
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isGlutenfree, setIsGlutenfree] = useState(false);
    const [isLactosefree, setIsLactosefree] = useState(false);

    const submit = (event) => {
        event.preventDefault();

        if (validate()) {
            //vegan vegetarish etc noch einabuen
            registration(formFields["username"].value, formFields["password"].value, formFields["email"].value, isVegan,isVegetarian, isGlutenfree, isLactosefree);
            if (isRegistered) {
                setIsOpenRegisterForm(false);
            }else{

            }

            // setIsOpen(true);
            //closeLoginForm();
        }
    };

    const onClickCancel = () => {
        setIsOpenRegisterForm(false);
    }

    return (
        <>
            <div className={Styles.registrationFormBackdrop}>
                <div className={Styles.registrationForm}>
                    <label className={Styles.headline}>Registrieren</label>
                    <label className={Styles.infotext}><br/>Bitte gib auf jeden Fall deinen Usernamen, deine
                        E-Mail-Adresse und dein Passwort an. Wenn du willst, kannst du auch deine Präferenzen schon
                        speichern.</label>
                    <div className={Styles.registrationFormContext}>
                        <form onSubmit={submit}>
                            <div className={Styles.fieldBox}>
                                <FormField
                                    pattern={/.{2,42}/}
                                    errorMessage="Bitte gib einen einzigartigen Usernamen an."
                                    name="username"
                                    label="Username*"
                                    type="text"
                                    required
                                />
                                <FormField
                                    pattern={emailRegex}
                                    errorMessage="Bitte gib deine E-Mail-Adresse an."
                                    name="email"
                                    label="E-Mail*"
                                    type="text"
                                    required
                                />
                                <FormField
                                    pattern={/.{6,42}/}
                                    errorMessage="Dein Passwort muss mindestens 6 Zeichen lang sein."
                                    name="password"
                                    label="Passwort*"
                                    type="password"
                                    required
                                />
                            </div>
                            <div className={Styles.buttonBox}>
                                <Checkbox onChange={setIsVegan}>
                                    <label>vegan</label>
                                </Checkbox>
                                <Checkbox onChange={setIsVegetarian}>
                                    <label>vegetarisch</label>
                                </Checkbox>
                                <Checkbox onChange={setIsLactosefree}>
                                    <label>laktosefrei</label>
                                </Checkbox>
                                <Checkbox onChange={setIsGlutenfree}>
                                    <label>glutenfrei</label>
                                </Checkbox>
                            </div>
                            <div className={Styles.bottomButtons}>
                                <button className={Styles.registerButton} type="submit">
                                    Registrieren
                                </button>
                                <button className={Styles.cancelButton} onClick={onClickCancel}>
                                    Abbrechen
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};


export default RegistrationFormContextWrapper;
