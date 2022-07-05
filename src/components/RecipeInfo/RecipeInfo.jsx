import React from 'react';
import Style from '../RecipeInfo/RecipeInfo.modules.css';
import PropTypes from 'prop-types';

export const RecipeInfo = ({ bool }) => {
  console.log(bool);
  if (bool === true) {
    return (
      <div className={Style.dotPos}>
        <span className={Style.dotGreen}>Ja</span>
      </div>
    );
  } else {
    return (
      <div className={Style.dotPos}>
        <span className={Style.dotRed}>Nein</span>
      </div>
    );
  }
};
RecipeInfo.defaultProps = {
  bool: false
};

RecipeInfo.propTypes = {
  bool: PropTypes.bool
};
