import React from "react";
import Styles from "../RecipeDetails/RecipeDetails.module.css";
import {Recipe} from "../Recipe/Recipe";
import {Button} from "../Button/Button";

export const RecipeDetails = ({image, recipe, onClose, id}) => {
    console.log(recipe);
    console.log("Zutaten:" + recipe.attributes.ingredientlist)
    console.log("image = " + image);
    return (
        <>
            <div className={Styles.recipeFormBackdrop}>
                <div className={Styles.recipeForm}>
                    <div className={Styles.Button}>
                        <Button onClick={onClose}>X</Button>
                    </div>
                    <div className={Styles.recipeContext}>
                        <div className={Styles.textContainer}>
                            <Recipe name={recipe.attributes.name} image={"http://localhost:1337" +image} description={recipe.attributes.description}></Recipe>
                            <div className={Styles.ingredients}>
                                <h3 className={Styles.headlines}>Zutaten:</h3>
                                <div>{recipe.attributes.ingredientlist}</div>
                            </div>
                            <div className={Styles.preparation}>
                                <h3 className={Styles.headlines}>Zubereitung:</h3>
                                <div>{recipe.attributes.preperation}</div>
                            </div>

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