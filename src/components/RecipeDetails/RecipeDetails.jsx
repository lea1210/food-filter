import React from "react";
import Styles from "../RecipeDetails/RecipeDetails.module.css";
import {Recipe} from "../Recipe/Recipe";
import {Button} from "../Button/Button";
import ingredients from "../../hooks/useRecipesData";

export const RecipeDetails = (recipe, onClose) => {
    return (
        <>
            <div className={Styles.Button}>
                <Button onClick={onClose}>Abbrechen</Button>
            </div>
            <div className={Styles.recipeHeadline}>
                <div className={Styles.img}>
                    <Recipe imgUrl={recipe.imgUrl}></Recipe>
                </div>
                <Recipe name={recipe.name}></Recipe>
            </div>
        </>
    );
};

export default RecipeDetails;