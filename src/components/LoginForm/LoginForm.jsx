import React from "react";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import { useLogin } from "../../contexts/LoginContext/LoginContext";

const LoginForm = ({onSubmit}) => {
    const { username, password } = useLogin();

    return (
        <Form onSubmit={onSubmit} testID="loginForm">
            <FormField
                pattern={/.{2,42}/}
                errorMessage="Bitte gib deinen Usernamen an"
                name="username"
                label="Username"
                initialValue={username}
                required
            />

            <FormField
                pattern={/^.{0,255}$/}
                errorMessage="Bitte gib dein Passwort an"
                name="password"
                label="Passwort"
                required
            />
        </Form>
    );
};

export default LoginForm;

