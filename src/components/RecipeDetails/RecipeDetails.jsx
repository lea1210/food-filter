import React from "react";
import Styles from "../RecipeDetails/RecipeDetails.module.css";
import {Recipe} from "../Recipe/Recipe";
import {Button} from "../Button/Button";
import {ingredients} from "../../hooks/useRecipesData";

export const RecipeDetails = ({onClose,name, imgUrl, ingredients, description}) => {
    return (
        <>
            <div className={Styles.Button}>
                <Button onClick={onClose}>Abbrechen</Button>
            </div>
            <div className={Styles.recipeHeadline}>
                <div className={Styles.img}>
                    <Recipe imgUrl={imgUrl}></Recipe>
                </div>
                <Recipe name={name}></Recipe>
            </div>
        </>
    );
};

export default RecipeDetails;