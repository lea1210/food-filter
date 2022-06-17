import {useEffect, useState} from "react";

// const API_URL = "http://localhost:1337/api/recipes/";
const API_URL = "http://localhost:1337/api/recipes?filters[ingredients][name][$eq]=tomate&filters[vegan]=false&filters[vegetarian]=false&filters[lactosefree]=false&filters[glutenfree]=false";

/*
const headers = {
  Authorization: `bearer ${API_KEY}`,
  "Content-Type": "application/json",
};
 */

async function extractResult(result) {
    console.log("bin im extract");
    if (result.ok) return await result.json();
    else throw new Error(`something went wrong: ${JSON.stringify(result)}`);
}

function determineFilterParams(ingredients, excluded, vegan, vegetarian, lactosefree, glutenfree) {
    let ingredientParams = "";
    let excludedParams = "";

    //zB http://localhost:1337/api/recipes?filters[ingredients][name][$eq]=Tomaten&filters[vegan]=false
    ingredients.forEach(ingredient => {
        ingredientParams += "?filters[ingredients][name][$eq]=" + ingredient + "&";
    });
    excluded.forEach(excludedIngr => {
        excludedParams += "?filters[ingredients][name][$ne]=" + excludedIngr + "&";
    });
    return ingredientParams + excludedParams + "filters[vegan]=" + vegan + "&filters[vegetarian]=" + vegetarian + "&filters[lactosefree]=" + lactosefree + "&filters[glutenfree]=" + glutenfree;

}

export const fetchRecipes = async (filterParams) => {
    // const result = await fetch(API_URL + filterParams);
    console.log("bin im fetch");
    const result = await fetch(API_URL);
    return await extractResult(result);
};

export const useRecipesData = (ingredientList) => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);

    console.log("bin im use");

    //setError(undefined);
    //setLoading(true);

    // useMemo verwenden damit getriggert wird wenn parameter sich ändern
    // return für hook
    // const filterParams = determineFilterParams(ingredients, excluded, vegan, vegetarian, lactosefree, glutenfree);

    console.log("komme bis hier")
    const loadRecipes = () => {
        console.log("load");
        setError(undefined);
        setLoading(true);
        const filterParams = [];
        fetchRecipes(filterParams)
            .then((recipes) => {
                setData(recipes.data)
                console.log("",recipes.data);
            })
            .catch((e) => setError(e))
            .finally(() => {
                setLoading(false);
            });
    };

    // useEffect(() => {
    //     console.log("effect");
    //     loadRecipes(filterParams);
    // }, [filterParams]);
    console.log("Data im use: ", data);
    console.log("loading: ", loading);
    return {data, error, loading, loadRecipes};
};
