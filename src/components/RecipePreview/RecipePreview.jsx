import React from "react";
import {Recipe} from "../Recipe/Recipe";
import Styles from "../Recipe/Recipe.module.css";
import PropTypes from "prop-types";

export const RecipePreview = ({name, onClick, description, image, id}) => {
    return (
        <>
            <div data-testid="recipe" onClick={onClick} className={Styles.recipeContainer}>
                <Recipe name={name} description={description} image={image}>
                    <h4 className={Styles.recipeName}>{name}</h4>
                    {/*<div style={{backgroundImage: `url(${image.data})`}} className={Styles.img}/>*/}
                    <div className={Styles.img}>
                        <img src={`http://localhost:1337/api/recipes/{image.data.attributes.url}`}/>
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