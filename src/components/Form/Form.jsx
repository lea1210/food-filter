import React from "react";
import {
    FormContextProvider,
    useForm,
} from "../../contexts/FormContext/FormContext";

const FormContextWrapper = ({ testID, children, onSubmit }) => {
    return (
        <FormContextProvider>
            <Form onSubmit={onSubmit}>{children}</Form>
        </FormContextProvider>
    );
};

const Form = ({ testID, onSubmit, children }) => {
    const { validate, formFields } = useForm();

    const submit = (event) => {
        event.preventDefault();
        // skip submitting if validation fails
        if (validate()) {
            onSubmit(formFields);
        }
    };

    return (
        <form data-testid={testID} onSubmit={submit}>
            {children}
        </form>
    );
};

export default FormContextWrapper;
