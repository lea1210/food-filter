import PropTypes from "prop-types";
import Style from "./Button.module.css";

export const Button = ({testID, type, className, onClick, children}) => {
    return (
        <button data-testid={testID} type={type} className={`${Style.button} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    type: undefined,
    className: undefined,
    onClick: () => null,
    children: undefined,
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string,
};
