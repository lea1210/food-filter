import React from "react";
import Styles from "./Ingredient.module.css";
import PropTypes from "prop-types";

export const Ingredient = ({ name, color }) => {
    return (
        <>
            <div className={color="dark" ? Styles.dark : Styles.light}>{name}</div>
        </>
    );
};

export default Ingredient;

/*Ingredient.defaultProps = {
    children: undefined,
    error: false,
    hint: undefined,
    type: "text",
    className: undefined,
    placeholder: undefined,
};

Ingredient.propTypes = {
    children: PropTypes.node,
    hint: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};*/
