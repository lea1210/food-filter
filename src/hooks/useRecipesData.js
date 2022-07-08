import { useState } from 'react';
import { useIngredients } from '../contexts/IngredientContext/IngredientContext';
import { useExcludedIngredients } from '../contexts/ExcludedContext/ExcludedContext';
import { usePreferences } from '../contexts/PreferencesContext/PreferencesContext';

const API_URL = 'http://localhost:1337/api/recipes';

async function extractResult(result) {
  if (result.ok) return await result.json();
  else throw new Error(`something went wrong: ${JSON.stringify(result)}`);
}

function determineFilterParams(
  ingredientList,
  excludedList,
  vegan,
  vegetarian,
  lactosefree,
  glutenfree
) {
  //http://localhost:1337/api/recipes?filters[$and][0][ingredients][name]=tomate&filters[$and][1][ingredients][name]=zwiebel
  let ingredientParams = '';
  let excludedParams = '';
  let filterParams;
  let ingredientCounter = 0;

  ingredientList.map((ingredient) => {
    if (ingredientCounter === 0) {
      ingredientParams += '?';
    } else {
      ingredientParams += '&';
    }
    ingredientParams +=
      'filters[$and][' +
      ingredientCounter +
      '][ingredients][name]=' +
      ingredient.name.toLowerCase();
    ingredientCounter += 1;
  });

  filterParams = ingredientParams + excludedParams.slice(0, -1);
  if (vegan) filterParams += '&filters[vegan]=true';
  if (vegetarian) filterParams += '&filters[vegetarian]=true';
  if (glutenfree) filterParams += '&filters[glutenfree]=true';
  if (lactosefree) filterParams += '&filters[lactosefree]=true';

  filterParams === '' ? (filterParams = '?') : (filterParams += '&');
  return filterParams + 'pagination[page]=1&pagination[pageSize]=100&populate=*';
}

function removeExcludedRecipes(recipes, excludedList) {
  return recipes.filter(function (recipe) {
    for (let i = 0; i < recipe.attributes.ingredients.data.length; i++) {
      for (let j = 0; j < excludedList.length; j++) {
        if (excludedList[j].name === recipe.attributes.ingredients.data[i].attributes.name) {
          return false;
        }
      }
    }
    return true;
  });
}

export const fetchRecipes = async (filterParams) => {
  const result = await fetch(API_URL + filterParams);
  return await extractResult(result);
};

export const useRecipesData = () => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [firstSearch, setFirstSearch] = useState(false);
  const { ingredientList } = useIngredients();
  const { excludedList } = useExcludedIngredients();
  const { isVegan, isVegetarian, isGlutenfree, isLactosefree } = usePreferences();

  //setError(undefined);
  //setLoading(true);

  // useMemo verwenden damit getriggert wird wenn parameter sich ändern
  // return für hook

  const loadRecipes = () => {
    const filterParams = determineFilterParams(
      ingredientList,
      excludedList,
      isVegan,
      isVegetarian,
      isLactosefree,
      isGlutenfree
    );
    console.log(filterParams);
    if (filterParams !== undefined) {
      fetchRecipes(filterParams)
        .then((recipes) => {
          const finaleRecipes = removeExcludedRecipes(recipes.data, excludedList);
          setData(finaleRecipes);
          setFirstSearch(true);
        })
        .catch((e) => setError(e))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // useEffect(() => {
  //     console.log("effect");
  //     loadRecipes(filterParams);
  // }, [filterParams]);
  return { data, error, loading, loadRecipes, firstSearch };
};
