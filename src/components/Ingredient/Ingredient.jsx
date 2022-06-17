import React from "react";
import Styles from "./Ingredient.module.css";
import PropTypes from "prop-types";
import {useIngredients} from "../../contexts/IngredientContext/IngredientContext";
import {useExcludedIngredients} from "../../contexts/ExcludedContext/ExcludedContext";

export const Ingredient = ({ name, color }) => {
    const {ingredientList, deleteIngredient} = useIngredients();
    const {excludedList, deleteExcluded} = useExcludedIngredients();

    const onClickDelete = () => {
        if (ingredientList.filter(e => e.name === name).length > 0) {
            deleteIngredient(name);
        }else if(excludedList.filter(e => e.name === name).length > 0){
            deleteExcluded(name);
        }
    }

    return (
        <>
            <div className={color="dark" ? Styles.dark : Styles.light}>
                {name}
                <div className={Styles.delete} onClick={onClickDelete}></div>
            </div>
        </>
    );
};

export default Ingredient;

/*Ingredient.defaultProps = {
    children: undefined,
    error: false,
    hint: undefined,
    type: "text",
    className: undefined,
    placeholder: undefined,
};

Ingredient.propTypes = {
    children: PropTypes.node,
    hint: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};*/
