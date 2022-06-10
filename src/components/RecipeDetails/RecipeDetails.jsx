import React from "react";
import Styles from "../RecipeDetails/RecipeDetails.module.css";
import {Recipe} from "../Recipe/Recipe";
import {Button} from "../Button/Button";

export const RecipeDetails = ({recipe, onClose}) => {
    return (
        <>
            <div className={Styles.Button}>
                <Button onClick={onClose}>Abbrechen</Button>
            </div>
            <div className={Styles.recipe}>
                <Recipe {...recipe}></Recipe>
            </div>
{/*            <div className={Styles.ButtonEasterEgg}>
                <Button onClick={}>Click me</Button>
            </div>*/}
        </>
    );
};

export default RecipeDetails;