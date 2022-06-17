import React from "react";
import Style from "./IngredientList.module.css";
import Ingredient from "../Ingredient/Ingredient";

export const IngredientList = ({ ingredients, color }) => {

    return (
        <>
            <div className={Style.ingredients}>
                <div className={Style.ingredientList}>
                    {ingredients.map((ingredient) => {
                            return <Ingredient name={ingredient.name} key={ingredient.id} color={color}/>
                        }
                    )}
                </div>
            </div>
        </>
    );
};


export default IngredientList;