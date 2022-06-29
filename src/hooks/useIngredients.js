import {useEffect, useState} from "react";

const API_URL = "http://localhost:1337/api/ingredients/";

async function extractResult(result) {
    if (result.ok) return await result.json();
    else throw new Error(`something went wrong: ${JSON.stringify(result)}`);
}

export const fetchIngredients = async (currentValue) => {
    const result = await fetch(API_URL + "?filters[name][$contains]="+currentValue);
    return await extractResult(result);
};

export const useIngredients = () => {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const loadIngredients = () => {
       fetchIngredients(currentValue)
            .then((ingredients) => {
                setData(ingredients.data);
            })
            .catch((e) => setError(e))
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
       loadIngredients(currentValue);
       }, [currentValue]);

    return {data, error, loading};
};
