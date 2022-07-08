import React from 'react';
import FormField from '../FormField/FormField';
import Styles from '../LoginForm/LoginForm.module.css';

import { FormContextProvider, useForm } from '../../contexts/FormContext/FormContext';
import { useLogin } from '../../contexts/LoginContext/LoginContext';
import { useState } from 'react';
import { useUser } from '../../contexts/UserInfoContext/UserInfoContext';
import { useLoginForm } from '../../contexts/LoginFormContext/LoginFormContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FormContextWrapper = ({ children, setIsOpen }) => {
  return (
    <FormContextProvider>
      <LoginForm setIsOpen={setIsOpen}>{children}</LoginForm>
    </FormContextProvider>
  );
};

const LoginForm = () => {
  const { closeLoginForm } = useLoginForm();
  const { openUserInfo } = useUser();
  const { validate, formFields } = useForm();
  const [isLogginIn, setIsLogginIn] = useState(false);
  const { login, loginError } = useLogin();

  const submit = (event) => {
    event.preventDefault();

    if (validate()) {
      setIsLogginIn(true);
      login(formFields['username'].value, formFields['password'].value).then((result) => {
        if (result) {
          setIsLogginIn(false);
          closeLoginForm();
          openUserInfo();
        } else {
          setIsLogginIn(false);
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <FormField
          pattern={/.{2,42}/}
          errorMessage="Bitte gib deinen Usernamen an."
          name="username"
          label="Username"
          type="text"
          required
        />

        <FormField
          pattern={/.{6,42}/}
          errorMessage="Dein Passwort ist mindestens 6 Zeichen lang."
          name="password"
          label="Passwort"
          type="password"
          required
        />
        {loginError && (
          <label htmlFor="LoginButton" className={Styles.errorMessage}>
            Username oder Passwort falsch!
          </label>
        )}
        <button id="LoginButton" className={Styles.loginButton} type="submit">
          Login
        </button>
        <br />
        {isLogginIn && (
          <img className={Styles.loading} src="gifs/loading.gif" alt="Loading" width={'30'} />
        )}
        <br />
        <label className={Styles.registerLabel}>Noch kein Konto? Jetzt </label>
        <Link className={Styles.registerLink} to="/register">
          registrieren
        </Link>
      </form>
    </>
  );
};
FormContextWrapper.defaultProps = {
  children: undefined,
  setIsOpen: undefined
};

FormContextWrapper.propTypes = {
  children: PropTypes.node,
  setIsOpen: PropTypes.func
};

export default FormContextWrapper;
