import React from "react";
import Styles from "../RecipeDetails/RecipeDetails.module.css";
import {Recipe} from "../Recipe/Recipe";
import {Button} from "../Button/Button";
import {Checkbox} from "../Checkbox/Checkbox";
import React from 'react';
import Styles from '../RecipeDetails/RecipeDetails.module.css';
import { Recipe } from '../Recipe/Recipe';
import { Button } from '../Button/Button';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';
import PropTypes from 'prop-types';

export const RecipeDetails = ({image, recipe, onClose, id}) => {
    console.log("vegan:" + recipe.attributes.vegan);
    return (
        <>
            <div className={Styles.recipeFormBackdrop}>
                <div className={Styles.recipeForm}>
                    <div className={Styles.Button}>
                        <Button onClick={onClose}>X</Button>
                    </div>
                    <div className={Styles.recipeContext}>
                        <div className={Styles.textContainer}>
                            <div className={Styles.Container}>
                                <Recipe name={recipe.attributes.name} image={"http://localhost:1337" + image}
                                        description={recipe.attributes.description}></Recipe>
                            </div>
                            <div className={Styles.preferences}>
                                <Checkbox name="vegan" checked={recipe.attributes.vegan}></Checkbox>
                                <label className={Styles.label}>vegan</label>
                                <Checkbox name="vegetarisch" checked={recipe.attributes.vegetarian}></Checkbox>
                                <label className={Styles.label}>vegetarisch</label>
                                <Checkbox name="laktosefrei" checked={recipe.attributes.lactosefree}></Checkbox>
                                <label className={Styles.label}>laktosefrei</label>
                                <Checkbox name="glutenfrei" checked={recipe.attributes.glutenfree}></Checkbox>
                                <label className={Styles.label}>glutenfrei</label>
                            </div>
                            <div className={Styles.ingredients}>
                                <h3 className={Styles.headlines}>Zutaten:</h3>
                                <div>{recipe.attributes.ingredientlist}</div>
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
export const RecipeDetails = ({ image, recipe, onClose }) => {
  console.log('vegan:' + recipe.attributes.vegan);
  return (
    <>
      <div className={Styles.recipeFormBackdrop}>
        <div className={Styles.recipeForm}>
          <div className={Styles.Button}>
            <Button onClick={onClose}>X</Button>
          </div>
          <div className={Styles.recipeContext}>
            <div className={Styles.textContainer}>
              <Recipe
                name={recipe.attributes.name}
                image={'http://localhost:1337' + image}
                description={recipe.attributes.description}></Recipe>
              <div className={Styles.preferences}>
                <label>vegan:</label>
                <RecipeInfo bool={recipe.attributes.vegan}></RecipeInfo>
                <label>vegetarisch:</label>
                <RecipeInfo bool={recipe.attributes.vegetarian}></RecipeInfo>
                <label>laktosefrei:</label>
                <RecipeInfo bool={recipe.attributes.lactosefree}></RecipeInfo>
                <label>glutenfrei:</label>
                <RecipeInfo bool={recipe.attributes.glutenfree}></RecipeInfo>
              </div>
              <div className={Styles.ingredients}>
                <h3 className={Styles.headlines}>Zutaten:</h3>
                <div>{recipe.attributes.ingredientlist}</div>
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
