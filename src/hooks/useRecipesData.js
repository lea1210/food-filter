import { useState } from 'react';
import { useIngredients } from '../contexts/IngredientContext/IngredientContext';
import { useExcludedIngredients } from '../contexts/ExcludedContext/ExcludedContext';
import { usePreferences } from '../contexts/PreferencesContext/PreferencesContext';

const API_URL = 'http://localhost:1337/api/recipes';

/**
 * extract json
 * @param result
 * @returns {Promise<*>}
 */
async function extractResult(result) {
  if (result.ok) return await result.json();
  else throw new Error(`something went wrong: ${JSON.stringify(result)}`);
}

/**
 * build filterparams with ingredients and preferences
 * @param ingredientList
 * @param excludedList
 * @param vegan
 * @param vegetarian
 * @param lactosefree
 * @param glutenfree
 * @returns {string}
 */
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

  //add every selected ingredient to params
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

  //add preference = true in case user selected it
  if (vegan)
    filterParams === ''
      ? (filterParams = '?filters[vegan]=true')
      : (filterParams += '&filters[vegan]=true');
  if (vegetarian)
    filterParams === ''
      ? (filterParams = '?filters[vegetarian]=true')
      : (filterParams += '&filters[vegetarian]=true');
  if (glutenfree)
    filterParams === ''
      ? (filterParams = '?filters[glutenfree]=true')
      : (filterParams += '&filters[glutenfree]=true');
  if (lactosefree)
    filterParams === ''
      ? (filterParams = '?filters[lactosefree]=true')
      : (filterParams += '&filters[lactosefree]=true');

  filterParams === '' ? (filterParams = '?') : (filterParams += '&');
  //add pagination and populate
  return filterParams + 'pagination[page]=1&pagination[pageSize]=100&populate=*';
}

/**
 * remove recipes with excluded ingredients
 * @param recipes
 * @param excludedList
 * @returns {*}
 */
function removeExcludedRecipes(recipes, excludedList) {
  return recipes.filter(function (recipe) {
    for (let i = 0; i < recipe.attributes.ingredients.data.length; i++) {
      for (let j = 0; j < excludedList.length; j++) {
        if (
          excludedList[j].name.toLowerCase() ===
          recipe.attributes.ingredients.data[i].attributes.name
        ) {
          return false;
        }
      }
    }
    return true;
  });
}

/**
 * fetch recipes from api
 * @param filterParams
 * @returns {Promise<*>}
 */
export const fetchRecipes = async (filterParams) => {
  const result = await fetch(API_URL + filterParams);
  return await extractResult(result);
};

/**
 * get recipe rsultlist
 * @returns {{data: ?, firstSearch: boolean, loadRecipes: loadRecipes, error: ?, loading: boolean}}
 */
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

  const loadRecipes = () => {
    const filterParams = determineFilterParams(
      ingredientList,
      excludedList,
      isVegan,
      isVegetarian,
      isLactosefree,
      isGlutenfree
    );
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

  return { data, error, loading, loadRecipes, firstSearch };
};
