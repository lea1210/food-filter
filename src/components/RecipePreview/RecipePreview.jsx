import React from "react";
import {Recipe} from "../Recipe/Recipe";
import Styles from "../RecipePreview/RecipePreview.module.css";
import PropTypes from "prop-types";

export const RecipePreview = ({name, onClick, description, image, id}) => {

    return (
        <>
            <div data-testid="recipe" onClick={onClick} className={Styles.recipeContainer}>
                <Recipe name={name} description={description} image={image}>
                    <h4 className={Styles.recipeName}>{name}</h4>
                    <div>
                        <img src={image } className={Styles.img}/>
                    </div>
                    <div className={Styles.recipeDescription}>
                        {description}
                    </div>
                </Recipe>
            </div>
        </>
    );
};

export default RecipePreview;