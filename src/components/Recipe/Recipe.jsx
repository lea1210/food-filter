import Styles from '../Recipe/Recipe.module.css';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * displays a recipe
 * @param name
 * @param onClick
 * @param image
 * @param ingredientlist
 * @param description
 * @param preperation
 * @returns {JSX.Element}
 * @constructor
 */
export const Recipe = ({ name, onClick, image, ingredientlist, description, preperation }) => {
  return (
    <div
      data-testid="recipe"
      className={`${Styles.recipeContainer} ${onClick ? Styles.clickable : ''}`}
      onClick={onClick}>
      <div className={Styles.recipeDetails}>
        <div>
          <img src={image} className={Styles.img} alt={'recipe'} />
        </div>
        <div className={Styles.textContainer}>
          <h4 className={Styles.recipeName}>{name}</h4>
          <div className={Styles.recipeDescription}>{description}</div>
        </div>
        <div className={Styles.preparation}>{preperation}</div>
        <div className={Styles.ingredients}>{ingredientlist}</div>
      </div>
    </div>
  );
};

Recipe.defaultProps = {
  name: 'Rezept 1',
  image: undefined,
  ingredientlist: [],
  description: ' ',
  preperation: ' ',
  id: '1241234'
};

Recipe.propTypes = {
  name: PropTypes.string,
  image: PropTypes.any,
  onClick: PropTypes.func,
  ingredientlist: PropTypes.array,
  description: PropTypes.string,
  preperation: PropTypes.string,
  id: PropTypes.string
};
