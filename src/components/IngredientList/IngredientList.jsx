import React from 'react';
import Style from './IngredientList.module.css';
import Ingredient from '../Ingredient/Ingredient';
import PropTypes from 'prop-types';

/**
 * displays a list of ingredient tags
 * @param ingredients
 * @returns {JSX.Element}
 * @constructor
 */
export const IngredientList = ({ ingredients }) => {
  return (
    <>
      <div className={Style.ingredients}>
        <div className={Style.ingredientList}>
          {ingredients.map((ingredient) => {
            return <Ingredient name={ingredient.name} key={ingredient.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default IngredientList;

IngredientList.defaultProps = {
  ingredients: undefined
};

IngredientList.propTypes = {
  ingredients: PropTypes.array
};
