import React, { useEffect } from "react";
import { Input } from "../Input/Input";
import { useForm } from "../../contexts/FormContext/FormContext";
import Styling from "./FormField.module.css";

const FormField = ({
                       initialValue,
                       required,
                       label,
                       type,
                       name,
                       errorMessage,
                       pattern = /.*/,
                   }) => {
    const { setValue, initFormField, formFields } = useForm();

    const formField = formFields[name];

    const validateFormField = (value) => {
        if (required && !value) return false;
        return pattern.test(value);
    };

    useEffect(() => {
        initFormField({
            name,
            validation: (value) => validateFormField(value),
            errorMessage,
            initialValue,
        });
    }, []);

    return (
        <div className={Styling.formField}>
            <Input
                value={formField?.value}
                error={formField?.error}
                onChange={(value) => setValue(name, value)}
                name={name}
                placeholder={label}
                type={type}
            >
                <>
                    {label} {required && "*"}
                </>
            </Input>

            {formField?.error && (
                <span data-testid="error" className={Styling.error}>{errorMessage}</span>
            )}
        </div>
    );
};

export default FormField;
