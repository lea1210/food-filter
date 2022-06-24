import React from "react";
import {Recipe} from "../Recipe/Recipe";
import Styles from "../Recipe/Recipe.module.css";
import PropTypes from "prop-types";

export const RecipePreview = ({name, onClick, description, image, id}) => {
    return (
        <>
            <div data-testid="recipe" onClick={onClick} className={Styles.recipeContainer}>
                <Recipe name={name}>
                    <h4 className={Styles.recipeName}>{name}</h4>
                    <div style={{backgroundImage: `url(${image})`}} className={Styles.img}/>
                    <div style={Styles.recipeDescription}>
                        <p>{description}</p>
                    </div>
                </Recipe>
            </div>
        </>
    );
};

export default RecipePreview;