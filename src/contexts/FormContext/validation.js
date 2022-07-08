export const validateFormFields = (formFields) => {
    let hasError = false;

    Object.values(formFields).forEach((field) => {
        const error = validateFormField(field);
        if (error) {
            hasError = true;
        }
    });
    return {hasError, formFields};
};

export const validateFormField = (field) => {
    field.error = !field.validation(field.value);
    return field.error;
};
