import PropTypes from "prop-types";
import Styling from "./Input.module.css";
import { useCallback, useState } from "react";

export const Input = ({
                          name,
                          value,
                          error,
                          children,
                          hint,
                          type,
                          placeholder,
                          className,
                          onChange,
                      }) => {
    const [id] = useState(`input-${Math.random().toString(16).slice(2)}`);

    const handleChange = useCallback(
        (event) => {
            onChange(event.target.value);
        },
        [onChange]
    );

    return (
        <div
            data-testid={`inputField-${name ?? ''}`}
            className={`${Styling.element} ${className}`}
        >
            <span data-testid="hint" className={Styling.hint}>
        {hint}
      </span>
            <input
                data-testid={`input${name ? '-' + name : ''}`}
                className={`${Styling.input} ${error ? Styling.error : ""}`}
                id={id}
                type={type}
                onChange={handleChange}
                value={value ?? ""}
                placeholder={placeholder}
            />
        </div>
    );
};

Input.defaultProps = {
    children: undefined,
    error: false,
    hint: undefined,
    type: "text",
    className: undefined,
    placeholder: undefined,
};

Input.propTypes = {
    children: PropTypes.node,
    hint: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
