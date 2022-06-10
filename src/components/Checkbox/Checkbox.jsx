import PropTypes from "prop-types";
import {useCallback, useState} from "react";
import Styles from "../Checkbox/Checkbox.module.css";
import React from "react";

export const Checkbox = ({
                             name,
                             error,
                             children,
                             hint,
                             value,
                             checked,
                             className,
                             onChange,
                         }) => {
    const [id] = useState(`checkbox-${Math.random().toString(16).slice(2)}`);

    const handleChange = useCallback(
        (event) => {
            console.log(event.target.checked);
            onChange(event.target.checked);
            checked = event.target.checked;
            console.log(event.target.checked);
        },
        [onChange]
    );


    return (
        <div
            data-testid={`checkboxField-${name ?? ''}`}
            className={`${Styles.element} ${className}`}
        >
            {children && (
                <label data-testid="label" htmlFor={id} className={Styles.label}>
                    {children}
                </label>
            )}
            <span data-testid="hint" className={Styles.hint}>
        {hint}
      </span>
            <label className={Styles.switch}>
                <input
                    data-testid={`checkbox${name ? '-' + name : ''}`}
                    className={`${Styles.input} ${error ? Styles.error : ""}`}
                    id={id}
                    type="checkbox"
                    value={value ?? ""}
                    onChange={handleChange}
                    checked={checked}
                />
                <span className={Styles.slider}></span>
            </label>
        </div>
    );
};

Checkbox.defaultProps = {
    children: undefined,
    error: false,
    hint: undefined,
    type: "text",
    className: undefined,
    placeholder: undefined,
};

Checkbox.propTypes = {
    children: PropTypes.node,
    hint: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
