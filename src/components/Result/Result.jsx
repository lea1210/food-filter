import PropTypes from "prop-types";
import {useState} from "react";
import {RecipeDetails} from "../RecipeDetails/RecipeDetails";
import recipe, {Recipe} from "../Recipe/Recipe";
import {RecipePreview} from "../RecipePreview/RecipePreview";

export const Result = ({loading, data, error}) => {
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
            {data.map((recipe) =>
                (
                    <RecipePreview
                        key={recipe.id}
                        name={recipe.attributes.name}
                        image={recipe.attributes.image}
                        description={recipe.attributes.description}
                        onClick={() => setSelectedRecipe(recipe)}
                    />
                ))
            }

            {selectedRecipe && <RecipeDetails recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)}/>}
        </>
    );
}


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

