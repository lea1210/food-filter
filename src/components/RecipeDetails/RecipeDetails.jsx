import React from "react";
import Styles from "../RecipeDetails/RecipeDetails.module.css";
import {Recipe} from "../Recipe/Recipe";
import {Button} from "../Button/Button";

export const RecipeDetails = ({recipe, onClose, id}) => {
    console.log(recipe);
    return (
        <>
            <div className={Styles.recipeFormBackdrop}>
                <div className={Styles.recipeForm}>
                    <div className={Styles.Button}>
                        <Button onClick={onClose}>X</Button>
                    </div>
                    <div className={Styles.recipe}>
                        <Recipe {...recipe.attributes}></Recipe>
                    </div>
                    {/*            <div className={Styles.ButtonEasterEgg}>
                <Button onClick={}>Click me</Button>
            </div>*/}
                </div>
            </div>
        </>
    );
};

export default RecipeDetails;