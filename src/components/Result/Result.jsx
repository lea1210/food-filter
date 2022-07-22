import PropTypes from 'prop-types';
import { useState } from 'react';
import { RecipeDetails } from '../RecipeDetails/RecipeDetails';
import { RecipePreview } from '../RecipePreview/RecipePreview';
import Styles from './Result.module.css';

/**
 * Displays results of the recipe search
 * @param loading
 * @param data
 * @param error
 * @param firstSearch
 * @returns {JSX.Element}
 * @constructor
 */
export const Result = ({ loading, data, error, firstSearch }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedRecipeImage, setSelectedRecipeImage] = useState(null);

  //show loading screen
  if (loading) {
    return <h1>Loading...</h1>;
    //in case of error show error message
  } else if (!loading && error) {
    return (
      <div>
        <h1 className={Styles.headline}>Da ist wohl etwas schiefgelaufen...!</h1>
        <p className={Styles.description}>{`${error}`}</p>
      </div>
    );
    //after the first search and if there are no recipes
  } else if (data.length < 1 && firstSearch === true) {
    return (
      <>
        <h3 className={Styles.headline}>Leider konnten wir keine Rezepte finden!</h3>
        <p className={Styles.description}> Versuch es doch nochmal mit ein paar anderen Zutaten.</p>
      </>
    );
  }
  return (
    <>
      {data.map((recipe) => (
        <div key={recipe.id} data-testid={`recipePreview${recipe.attributes.name}`}>
          <RecipePreview
            key={recipe.id}
            name={recipe.attributes.name}
            image={`http://localhost:1337` + recipe.attributes.image.data[0].attributes.url}
            description={recipe.attributes.description}
            onClick={() => {
              setSelectedRecipe(recipe);
              setSelectedRecipeImage(recipe.attributes.image.data[0].attributes.url);
            }}
          />
        </div>
      ))}
      {selectedRecipe && (
        <RecipeDetails
          recipe={selectedRecipe}
          image={selectedRecipeImage}
          onClose={() => setSelectedRecipe(null) && setSelectedRecipeImage(null)}
        />
      )}
    </>
  );
};

Result.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  error: PropTypes.string,
  firstSearch: PropTypes.bool
};

Result.defaultProps = {
  loading: true,
  data: [],
  error: undefined,
  firstSearch: false
};
