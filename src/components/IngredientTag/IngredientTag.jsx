import React from "react";
import Style from "./IngredientTag.module.css";
import Ingredient from "../Ingredient/ingredient";

export const IngredientTag = ({ ingredients }) => {
    return (
        <>
            <div className={Style.ingredients}>
                <div className={Style.headline}>
                    <h4>Zutatenliste</h4>
                </div>
                <div className={Style.ingredientList}>
                    {ingredients.map((ingredient) => {
                            return <Ingredient name={ingredient.name} key={ingredient.id}/>
                        }
                    )}
                </div>
            </div>
        </>
    );
};


export default IngredientTag;