import React, { useContext, useState } from 'react';
import { validateFormFields } from './validation';
import PropTypes from 'prop-types';

export const FormContext = React.createContext(undefined);

export function FormContextProvider({ children }) {
  const [formFields, setFormFields] = useState({});

  /**
   * initialize from field
   * @param name
   * @param validation
   * @param errorMessage
   * @param initialValue
   */
  const initFormField = ({
    name,
    validation = () => true,
    errorMessage = '',
    initialValue = ''
  }) => {
    setFormFields((prevFormFields) => {
      prevFormFields[name] = {
        validation,
        errorMessage,
        value: initialValue,
        error: false
      };
      return { ...prevFormFields };
    });
  };

  /**
   * set new value to form field
   * @param name
   * @param value
   */
  const setValue = (name, value) =>
    setFormFields((prevFormFields) => {
      prevFormFields[name].value = value;
      return { ...prevFormFields };
    });

  /**
   * validate formfield values
   * @returns {boolean}
   */
  const validate = () => {
    const { hasError, formFields: updatedFormFields } = validateFormFields(formFields);
    setFormFields({ ...updatedFormFields });

    return !hasError;
  };

  return (
    <FormContext.Provider value={{ initFormField, setValue, validate, formFields }}>
      {children}
    </FormContext.Provider>
  );
}

export const useForm = () => useContext(FormContext);

FormContextProvider.defaultProps = {
  children: undefined
};

FormContextProvider.propTypes = {
  children: PropTypes.node
};
