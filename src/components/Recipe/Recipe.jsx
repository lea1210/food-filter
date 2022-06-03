import Styles from "../Recipe/Recipe.module.css";
import PropTypes from "prop-types";

export const Recipe = ({name, onClick, imgUrl, ingredients, description}) => {
    return (
        <div data-testid="recipe" onClick={onClick}>
            <div style={{ backgroundImage: `url(${imgUrl})` }} className={Styles.img} />
            <div className={Styles.recipeDetails}>
                <h4 className={Styles.recipeName}>{name}</h4>
            </div>
            <div className={Styles.recipeDescription}>
                {description}
            </div>
            <div className={Styles.ingredients}>
                {ingredients}
            </div>
        </div>
    );
};

export const Props = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string
};
Recipe.propTypes = Props;
Recipe.defaultProps = {
    name: "Super Rezept",
};
