import {useEffect, useState} from "react";
import {useIngredients} from "../contexts/IngredientContext/IngredientContext";
import {useExcludedIngredients} from "../contexts/ExcludedContext/ExcludedContext";
import {usePreferences} from "../contexts/PreferencesContext/PreferencesContext";

const API_URL = "http://localhost:1337/api/recipes/";

async function extractResult(result) {
    if (result.ok) return await result.json();
    else throw new Error(`something went wrong: ${JSON.stringify(result)}`);
}

function determineFilterParams(ingredientList, excludedList, vegan, vegetarian, lactosefree, glutenfree) {
    let ingredientParams = "";
    let excludedParams = "";
    let filterParams;

    ingredientList.map((ingredient) => {
        ingredientParams += "?filters[ingredients][name][$eq]=" + ingredient.name.toLowerCase() + "&";
    });
    excludedList.map((excludedIngr) => {
        console.log("ich exclude" + excludedIngr.name);
        excludedParams += "?filters[ingredients][name][$ne]=" + excludedIngr.name.toLowerCase() + "&";
    });
    filterParams =  ingredientParams + excludedParams.slice(0,-1);
    if(vegan) filterParams += "&filters[vegan]=true";
    if(vegetarian) filterParams += "&filters[vegetarian]=true";
    if(glutenfree) filterParams += "&filters[glutenfree]=true";
    if(lactosefree) filterParams += "&filters[lactosefree]=true";
    return filterParams+"&populate=*";
}

export const fetchRecipes = async (filterParams) => {
    console.log(API_URL + filterParams);
    const result = await fetch(API_URL + filterParams);
    return await extractResult(result);
};

export const useRecipesData = () => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const {ingredientList} = useIngredients();
    const {excludedList} = useExcludedIngredients();
    const {isVegan, isVegetarian, isGlutenfree, isLactosefree} = usePreferences();

    //setError(undefined);
    //setLoading(true);

    // useMemo verwenden damit getriggert wird wenn parameter sich ändern
    // return für hook


    const loadRecipes = () => {
        const filterParams = determineFilterParams(ingredientList, excludedList, isVegan, isVegetarian, isLactosefree, isGlutenfree);
        fetchRecipes(filterParams)
            .then((recipes) => {
                setData(recipes.data)
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
    return {data, error, loading, loadRecipes};
};
