import React from 'react';
import { Recipe } from '../Recipe/Recipe';
import Styles from '../RecipePreview/RecipePreview.module.css';
import PropTypes from 'prop-types';

/**
 * Show a preview of the recipe with only name, image and description in resultlist
 * @param name
 * @param onClick
 * @param description
 * @param image
 * @returns {JSX.Element}
 * @constructor
 */
export const RecipePreview = ({ name, onClick, description, image }) => {
  return (
    <>
      <div
        data-testid="recipe"
        className={`${Styles.recipeContainer} ${onClick ? Styles.clickable : ''}`}
        onClick={onClick}>
        <Recipe name={name} description={description} image={image}>
          <div>
            <img src={image} className={Styles.img} alt={'recipe'} />
          </div>
          <div className={Styles.textContainer}>
            <h4 className={Styles.recipeName}>{name}</h4>
            <div className={Styles.recipeDescription}>{description}</div>
          </div>
        </Recipe>
      </div>
    </>
  );
};
RecipePreview.defaultProps = {
  name: ' ',
  onClick: undefined,
  description: ' ',
  image: ' '
};

RecipePreview.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  description: PropTypes.string,
  image: PropTypes.string
};
