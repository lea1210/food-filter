import React from 'react';
import Styles from './Ingredient.module.css';
import PropTypes from 'prop-types';
import { useIngredients } from '../../contexts/IngredientContext/IngredientContext';
import { useExcludedIngredients } from '../../contexts/ExcludedContext/ExcludedContext';

export const Ingredient = ({ name }) => {
  const { ingredientList, deleteIngredient } = useIngredients();
  const { excludedList, deleteExcluded } = useExcludedIngredients();

  const onClickDelete = () => {
    if (ingredientList.filter((e) => e.name === name).length > 0) {
      deleteIngredient(name);
    } else if (excludedList.filter((e) => e.name === name).length > 0) {
      deleteExcluded(name);
    }
  };

  return (
    <>
      <div className={Styles.dark}>
        {name}
        <div className={Styles.delete} onClick={onClickDelete}></div>
      </div>
    </>
  );
};

export default Ingredient;

Ingredient.defaultProps = {
  name: 'Zutat1'
};

Ingredient.propTypes = {
  name: PropTypes.string
};
