import React, { useContext } from "react";
import {LoginContext, useLogin} from "../../contexts/LoginContext/LoginContext";
import PropTypes from "prop-types";
import Styles from "../LoginButton/LoginButton.module.css";

const LoginButton = ({ className }) => {
    const { isLoggedIn, logIn, logOut } = useLogin();

    const onClick = () => {
        if (isLoggedIn) logOut();
        else logIn();
    };

    return (
        <>
            <button onClick={onClick} className={Styles.loginButton}>
               Login
            </button>
        </>
    );
};

export default LoginButton;

