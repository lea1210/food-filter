import React from "react";
import {Recipe} from "../Recipe/Recipe";
import Styles from "../Recipe/Recipe.module.css";
import PropTypes from "prop-types";

export const RecipePreview = ({recipe, onClick,imgUrl}) => {
    return (
        <>
            <div data-testid="recipe" onClick={onClick} className={Styles.recipeContainer}>
                <Recipe name={recipe.name}>
                    <h4 className={Styles.recipeName}>{recipe.name}</h4>
                    <div style={{backgroundImage: `url(${recipe.imgUrl})`}} className={Styles.img}/>
                </Recipe>
            </div>
        </>
    );
};
export const Props = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
};
RecipePreview.propTypes = Props;

export default RecipePreview;