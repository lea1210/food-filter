import PropTypes from "prop-types";
import {useState} from "react";
import {RecipeDetails} from "../RecipeDetails/RecipeDetails";
import {Recipe} from "../Recipe/Recipe";

export const Result = ({ loading, data, error }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    if (loading) {
        //später ladeanimation
        return <h1>Loading...</h1>;
    } else if (!loading && error) {
        return (
            <div>
                <h1>Da ist wohl etwas schiefgelaufen...!</h1>
                <p>{`${error}`}</p>
            </div>
        );
    } else if (data.length < 1) {
        return (
            <>
                <h3>Leider konnten wir keine Rezepte finden!</h3>
                <p>
                    Versuch es doch nochmal mit ein paar anderen Zutaten.
                </p>
            </>
        );
    }

    return (
        <>
            {data.map((recipe) => (
                <Recipe
                    key={recipe.name}
                    name={recipe.name}
                    onClick={() => setSelectedRecipe(recipe)}
                />
            ))}

            {selectedRecipe && <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
        </>
    );
};

Result.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.array,
    error: PropTypes.string,
};

Result.defaultProps = {
    loading: true,
    data: [],
    error: undefined,
};
