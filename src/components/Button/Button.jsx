import PropTypes from 'prop-types';
import Style from './Button.module.css';

/**
 * Displays a button
 * @param testID
 * @param type
 * @param className
 * @param onClick
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const Button = ({ testID, type, className, onClick, children }) => {
  return (
    <button
      data-testid={testID}
      type={type}
      className={`${Style.button} ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: undefined,
  className: undefined,
  onClick: () => null,
  children: undefined,
  testID: ''
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  testID: PropTypes.string
};
