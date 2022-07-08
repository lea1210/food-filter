import Styles from "../Recipe/Recipe.module.css";
import PropTypes from "prop-types";
import React from "react";

export const Recipe = ({
                           name,
                           onClick,
                           image,
                           ingredientlist,
                           description,
                           preperation,
                           id,
                       }) => {
    return (
        <div data-testid="recipe" className={`${Styles.recipeContainer} ${onClick ? Styles.clickable : ''}`}
             onClick={onClick}>
            <div className={Styles.recipeDetails}>
                <div>
                    <img src={image} className={Styles.img}/>
                </div>
                <div className={Styles.textContainer}>
                    <h4 className={Styles.recipeName}>{name}</h4>
                    <div className={Styles.recipeDescription}>
                        {description}
                    </div>
                </div>
                <div className={Styles.preparation}>
                    {preperation}
                </div>
                <div className={Styles.ingredients}>
                    {ingredientlist}
                </div>
            </div>
        </div>
    );
};

export default Recipe;
