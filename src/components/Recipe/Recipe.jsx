import Styles from "../Recipe/Recipe.module.css";
import PropTypes from "prop-types";

export const Recipe = ({name, onClick, image, ingredientlist, description, preperation, id, vegan, vegetarian, lactosefree, glutenfree}) => {
    return (
        <div data-testid="recipe" onClick={onClick}>
            <div className={Styles.img}>
                <img src={image}/>
            </div>
            <div className={Styles.recipeDetails}>
                <h4 className={Styles.recipeName}>{name}</h4>
            </div>
            <div className={Styles.recipeDescription}>
                {description}
            </div>
            <div className={Styles.preparation}>
                {preperation}
            </div>
            <div className={Styles.ingredients}>
                {ingredientlist}
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
