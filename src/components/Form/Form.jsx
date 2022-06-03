import React from "react";
import {
    FormContextProvider,
    useForm,
} from "../../contexts/FormContext/FormContext";
import {useLogin} from "../../contexts/LoginContext/LoginContext";

const FormContextWrapper = ({ testID, children, onSubmit }) => {
    return (
        <FormContextProvider>
            <Form onSubmit={onSubmit}>{children}</Form>
        </FormContextProvider>
    );
};

const Form = ({ testID, onSubmit,setIsOpen, children }) => {
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
        <form data-testid={testID} onSubmit={submit}>
            {children}
        </form>
    );
};

export default FormContextWrapper;
