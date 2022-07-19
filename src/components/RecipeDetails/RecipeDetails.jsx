import React from 'react';
import Styles from '../RecipeDetails/RecipeDetails.module.css';
import PropTypes from 'prop-types';

/**
 * displays the detailed recipe view
 * @param image
 * @param recipe
 * @param onClose
 * @returns {JSX.Element}
 * @constructor
 */
export const RecipeDetails = ({ image, recipe, onClose }) => {
  return (
    <>
      <div className={Styles.recipeFormBackdrop}>
        <div className={Styles.recipeForm}>
          <div className={Styles.Button}>
            <div className={Styles.delete} onClick={onClose}></div>
          </div>
          <div className={Styles.recipeContext}>
            <div className={Styles.textContainer}>
              <h1 className={Styles.headline}>{recipe.attributes.name}</h1>
              <div className={Styles.preferences}>
                {recipe.attributes.vegan ? (
                  <label className={Styles.prefLabel}>vegan </label>
                ) : (
                  <label></label>
                )}
                {recipe.attributes.vegetarian ? (
                  <label className={Styles.prefLabel}>vegetarisch </label>
                ) : (
                  <label></label>
                )}
                {recipe.attributes.glutenfree ? (
                  <label className={Styles.prefLabel}>glutenfrei </label>
                ) : (
                  <label></label>
                )}
                {recipe.attributes.lactosefree ? (
                  <label className={Styles.prefLabel}>laktosefrei</label>
                ) : (
                  <label></label>
                )}
              </div>
              <div className={Styles.description}>{recipe.attributes.description}</div>
              <div className={Styles.imgingr}>
                <img
                  src={'http://localhost:1337' + image}
                  alt={'Rezeptbild'}
                  className={Styles.image}
                />
                <div className={Styles.ingredients}>
                  <h3 className={Styles.headlines}>Zutaten:</h3>
                  <pre className={Styles.ingredients}>{recipe.attributes.ingredientlist}</pre>
                </div>
              </div>
              <div className={Styles.preparation}>
                <h3 className={Styles.headlines}>Zubereitung:</h3>
                <div>{recipe.attributes.preperation}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

RecipeDetails.defaultProps = {
  image: undefined,
  recipe: undefined,
  onClose: undefined
};

RecipeDetails.propTypes = {
  image: PropTypes.any,
  recipe: PropTypes.object,
  onClose: PropTypes.func
};
