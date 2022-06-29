import {useState} from "react";
import {useIngredients} from "../contexts/IngredientContext/IngredientContext";
import {useExcludedIngredients} from "../contexts/ExcludedContext/ExcludedContext";
import {usePreferences} from "../contexts/PreferencesContext/PreferencesContext";
import ingredient from "../components/Ingredient/Ingredient";

const API_URL = "http://localhost:1337/api/recipes/";
//?pagination[page]=1&pagination[pageSize]=100

async function extractResult(result) {
    if (result.ok) return await result.json();
    else throw new Error(`something went wrong: ${JSON.stringify(result)}`);
}

function determineFilterParams(ingredientList, excludedList, vegan, vegetarian, lactosefree, glutenfree) {
    //http://localhost:1337/api/recipes?filters[$and][0][ingredients][name]=tomate&filters[$and][1][ingredients][name]=zwiebel
    let ingredientParams = "";
    let excludedParams = "";
    let filterParams;
    let ingredientCounter = 0;

    ingredientList.map((ingredient) => {
        if (ingredientCounter === 0){
            ingredientParams += "?";
        }else{
            ingredientParams += "&";
        }
        ingredientParams += "filters[$and][" + ingredientCounter + "][ingredients][name]=" + ingredient.name.toLowerCase();
        ingredientCounter += 1;
    });
 /*   excludedList.map((excludedIngr) => {
        console.log("ich exclude" + excludedIngr.name);
        excludedParams += "?filters[ingredients][name][$neq]=" + excludedIngr.name.toLowerCase() + "&";
    });*/
    filterParams =  ingredientParams + excludedParams.slice(0,-1);
    if(vegan) filterParams += "&filters[vegan]=true";
    if(vegetarian) filterParams += "&filters[vegetarian]=true";
    if(glutenfree) filterParams += "&filters[glutenfree]=true";
    if(lactosefree) filterParams += "&filters[lactosefree]=true";
    return filterParams+"&pagination[page]=1&pagination[pageSize]=100&populate=*";
}
function removeExcludedRecipes (recipes, excludedList){
    return recipes.filter(function (recipe){
        console.log(recipe);
        console.log(excludedList);
        for (let i = 0; i < recipe.attributes.ingredients.data.length; i++) {
            console.log(recipe.attributes.ingredients.data[i].attributes.name);
            for (let j = 0; j < excludedList.length; j++) {
                console.log("aus data: ", recipe.attributes.ingredients.data[i].attributes.name);
                console.log("aus excludedlist: ", excludedList[j]);
                if(excludedList[j].name === recipe.attributes.ingredients.data[i].attributes.name){
                    return false
                }
            }
        }
        return true;
    });
}

/*function excludeRecipe(recipe){
    console.log(recipe);
    console.log(excludedList);
    for (let i = 0; i < recipe.attributes.ingredients.data.length; i++) {
        console.log(recipe.attributes.ingredients.data[i].attributes.name);
        for (let j = 0; j < excludedList.length; j++) {
            console.log("aus data: ", recipe.attributes.ingredients.data[i].attributes.name);
            console.log("aus excludedlist: ", excludedList[j]);
            if(excludedList[j] === recipe.attributes.ingredients.data[i].attributes.name){
                return false
            }
        }
    }
    return true;
}*/

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
                console.log("recipes vor exclude: ", recipes.data);
                const finaleRecipes = removeExcludedRecipes(recipes.data, excludedList);
                console.log("recipes danach: ", finaleRecipes);
                setData(finaleRecipes);
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
