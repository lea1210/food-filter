import React from "react";
import {Recipe} from "../Recipe/Recipe";
import Styles from "../Recipe/Recipe.module.css";

export const RecipePreview = ({recipe, onClick}) => {
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

export default RecipePreview;