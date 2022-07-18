/**
 * check if all formfields are valid
 * @param formFields
 * @returns {{hasError: boolean, formFields}}
 */
export const validateFormFields = (formFields) => {
  let hasError = false;

  Object.values(formFields).forEach((field) => {
    const error = validateFormField(field);
    if (error) {
      hasError = true;
    }
  });
  return { hasError, formFields };
};

/**
 * check if formfield has an error
 * @param field
 * @returns {*|boolean}
 */
export const validateFormField = (field) => {
  field.error = !field.validation(field.value);
  return field.error;
};
