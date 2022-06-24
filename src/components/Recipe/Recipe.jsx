import Styles from "../Recipe/Recipe.module.css";
import PropTypes from "prop-types";

export const Recipe = ({name, onClick, image, ingredients, description, preparation, id}) => {
    return (
        <div data-testid="recipe" onClick={onClick}>
            <div style={{backgroundImage: `url(${image})`}} className={Styles.img}/>
            <div className={Styles.recipeDetails}>
                <h4 className={Styles.recipeName}>{name}</h4>
            </div>
            <div className={Styles.recipeDescription}>
                {description}
            </div>
            <div className={Styles.preparation}>
                {preparation}
            </div>
            <div className={Styles.ingredients}>
                {ingredients}
            </div>
        </div>
    );
};

export default Recipe;
