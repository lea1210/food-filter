import Styles from "../Recipe/Recipe.module.css";
import PropTypes from "prop-types";
import React from "react";

export const Recipe = ({
                           name,
                           onClick,
                           image,
                           ingredientlist,
                           description,
                           preperation,
                           id,
                           vegan,
                           vegetarian,
                           lactosefree,
                           glutenfree
                       }) => {
    return (
        <div data-testid="recipe" className={`${Styles.recipeContainer} ${onClick ? Styles.clickable : ''}`}
             onClick={onClick}>
            <div className={Styles.recipeDetails}>
                <div>
                    <img src={image} className={Styles.img}/>
                </div>
                <div className={Styles.textContainer}>
                    <h4 className={Styles.recipeName}>{name}</h4>
                    <div className={Styles.recipeDescription}>
                        {description}
                    </div>
                </div>
            </div>
            {/*<div className={Styles.preferences}>*/}
            {/*    <li>*/}
            {/*        <ul>Vegan: {vegan}</ul>*/}
            {/*        <ul>Vegetarisch: {vegetarian}</ul>*/}
            {/*        <ul>Laktosefrei: {lactosefree}</ul>*/}
            {/*        <ul>Glutenfrei: {glutenfree}</ul>*/}
            {/*    </li>*/}
            {/*</div>*/}
        </div>
    );
};

export default Recipe;
