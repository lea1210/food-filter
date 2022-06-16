import React from "react";
import Style from "./IngredientList.module.css";
import Ingredient from "../Ingredient/Ingredient";

export const IngredientList = ({ ingredients }) => {
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


export default IngredientList;