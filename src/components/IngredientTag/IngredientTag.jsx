import React from "react";
import Style from "./IngredientTag.module.css";
import Ingredient from "../Ingredient/ingredient";

export const ingredientTag = ({ingredients}) => {
    return (
        <>
            <div className={Style.ingredients}>
            <div className={Style.headline}>
                <h4>Zutatenliste</h4>
            </div>
                <div className={Style.ingredientList}>
                    {ingredients.map((ingredient) => {
                        return <Ingredient name={ingredient.name}></Ingredient>
                        }
                    )}
                </div>
            </div>
        </>
    );
};

export default ingredientTag;