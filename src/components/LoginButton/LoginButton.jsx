import React, { useContext } from "react";
import {LoginContext, useLogin} from "../../contexts/LoginContext/LoginContext";
import PropTypes from "prop-types";

const LoginButton = ({ className }) => {
    const { isLoggedIn, logIn, logOut } = useLogin();

    const onClick = () => {
        if (isLoggedIn) logOut();
        else logIn();
    };

    return (
        <>
            <button onClick={onClick}>
               Login
            </button>
        </>
    );
};

export default LoginButton;

