import React from "react";
import Styles from "../RecipeDetails/RecipeDetails.module.css";
import {Recipe} from "../Recipe/Recipe";
import {Button} from "../Button/Button";

export const RecipeDetails = ({image, recipe, onClose, id, preparation, ingredients}) => {
    console.log(recipe);
    console.log("image = " + image);
    return (
        <>
            <div className={Styles.recipeFormBackdrop}>
                <div className={Styles.recipeForm}>
                    <div className={Styles.Button}>
                        <Button onClick={onClose}>X</Button>
                    </div>
                    <div className={Styles.recipeContext}>
                        <div className={Styles.recipe}>
                            <Recipe name={recipe.attributes.name} image={"http://localhost:1337" +image}></Recipe>

                        </div>

                        {/*            <div className={Styles.ButtonEasterEgg}>
                <Button onClick={}>Click me</Button>
            </div>*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecipeDetails;