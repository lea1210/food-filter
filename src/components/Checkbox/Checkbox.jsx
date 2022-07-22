import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import Styles from '../Checkbox/Checkbox.module.css';
import React from 'react';

/**
 * Displays a checkbox with slider
 * @param name
 * @param children
 * @param value
 * @param checked
 * @param onChange
 * @returns {JSX.Element}
 * @constructor
 */
export const Checkbox = ({ name, children, value, checked, onChange }) => {
  const [id] = useState(`checkbox-${Math.random().toString(16).slice(2)}`);

  /**
   * Sets new value for checked in onChange
   * @type {(function(*): void)|*}
   */
  const handleChange = useCallback(
    (event) => {
      onChange(event.target.checked);
    },
    [onChange]
  );

  return (
    <div data-testid={`checkbox${name}`}>
      {children && (
        <label data-testid="label" htmlFor={id} className={Styles.label}>
          {children}
        </label>
      )}
      <label className={Styles.switch}>
        <input
          id={id}
          type="checkbox"
          value={value ?? ''}
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
  type: 'text',
  placeholder: undefined,
  name: ''
};

Checkbox.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool
};
