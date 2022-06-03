import { useEffect, useState } from "react";

const API_URL = "http://localhost:1337/api/recipes/";

/*
const headers = {
  Authorization: `bearer ${API_KEY}`,
  "Content-Type": "application/json",
};
 */

async function extractResult(result) {
    if (result.ok) return await result.json();
    else throw new Error(`something went wrong: ${JSON.stringify(result)}`);
}

function determineFilterParams(ingredients, excluded, vegan, vegetarian, lactosefree, glutenfree){
    let ingredientParams = "";
    let excludedParams = "";

    //zB http://localhost:1337/api/recipes?filters[ingredients][name][$eq]=Tomaten&filters[vegan]=false
    ingredients.forEach(ingredient => {
        ingredientParams += "?filters[ingredients][name][$eq]=" + ingredient +"&";
    });
    excluded.forEach(excludedIngr => {
        excludedParams += "?filters[ingredients][name][$ne]=" + excludedIngr + "&";
    });
    return ingredientParams + excludedParams + "filters[vegan]=" + vegan +"&filters[vegetarian]=" + vegetarian + "&filters[lactosefree]=" + lactosefree + "&filters[glutenfree]=" + glutenfree;

}

export const fetchRecipes = async (filterParams) => {
    const result = await fetch(API_URL + filterParams);

    return await extractResult(result);
};

export const useRecipesData = (ingredients, excluded, vegan, vegetarian, lactosefree, glutenfree) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);

        setError(undefined);
        setLoading(true);
        const filterParams = determineFilterParams(ingredients, excluded, vegan, vegetarian, lactosefree, glutenfree);

        const loadRecipes = (filterParams) => {
            fetchRecipes(filterParams)
                .then((recipes) => setData(recipes.data))
                .catch((e) => setError(e))
                .finally(() => {
                    setLoading(false);
                });
        };

    useEffect(() => {
        loadRecipes(filterParams);
    },[filterParams]);

    return { data, error, loading };
};
