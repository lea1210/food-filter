import React, { useContext, useState } from "react";
import { validateFormFields } from "./validation";

export const FormContext = React.createContext(undefined);

export function FormContextProvider({ children }) {
    const [formFields, setFormFields] = useState({});

    const initFormField = ({
                               name,
                               validation = () => true,
                               errorMessage = "",
                               initialValue = '',
                           }) => {
        setFormFields((prevFormFields) => {
            prevFormFields[name] = {
                validation,
                errorMessage,
                value: initialValue,
                error: false,
            };
            return { ...prevFormFields };
        });
    };

    const setValue = (name, value) =>
        setFormFields((prevFormFields) => {
            prevFormFields[name].value = value;
            return { ...prevFormFields };
        });

    const validate = () => {
        const { hasError, formFields: updatedFormFields } = validateFormFields(formFields);

        setFormFields({ ...updatedFormFields });

        return !hasError;
    };

    return (
        <FormContext.Provider
            value={{ initFormField, setValue, validate, formFields }}
        >
            {children}
        </FormContext.Provider>
    );
}

export const useForm = () => useContext(FormContext);
