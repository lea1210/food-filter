import React, { useEffect } from 'react';
import { Input } from '../Input/Input';
import { useForm } from '../../contexts/FormContext/FormContext';
import Styling from './FormField.module.css';
import PropTypes from 'prop-types';

/**
 * Displays a formfield
 * @param initialValue
 * @param required
 * @param label
 * @param type
 * @param name
 * @param errorMessage
 * @param pattern
 * @returns {JSX.Element}
 * @constructor
 */
const FormField = ({ initialValue, required, label, type, name, errorMessage, pattern = /.*/ }) => {
  const { setValue, initFormField, formFields } = useForm();

  //get the formfield with the given name
  const formField = formFields[name];

  //check if value fits the pattern and if required fields are filled
  const validateFormField = (value) => {
    if (required && !value) return false;
    return pattern.test(value);
  };

  useEffect(() => {
    initFormField({
      name,
      validation: (value) => validateFormField(value),
      errorMessage,
      initialValue
    });
  }, []);

  return (
    <div>
      <Input
        value={formField?.value}
        error={formField?.error}
        onChange={(value) => setValue(name, value)}
        name={name}
        placeholder={label}
        type={type}>
        <>
          {label} {required && '*'}
        </>
      </Input>

      {formField?.error && (
        <>
          <br />
          <span data-testid="error" className={Styling.error}>
            {errorMessage}
          </span>
        </>
      )}
    </div>
  );
};

export default FormField;

FormField.defaultProps = {
  initialValue: '',
  required: false,
  label: ' ',
  type: 'input',
  name: ' ',
  errorMessage: '',
  pattern: /.*/
};

FormField.propTypes = {
  initialValue: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  pattern: PropTypes.any
};
