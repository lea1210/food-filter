import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:1337/api/ingredients/';

async function extractResult(result) {
  if (result.ok) return await result.json();
  else throw new Error(`something went wrong: ${JSON.stringify(result)}`);
}

export const fetchIngredients = async (currentValue) => {
  const result = await fetch(API_URL + '?filters[name][$contains]=' + currentValue);
  return await extractResult(result);
};

export const useIngredientsData = (currentValue) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentValue !== undefined) {
      if (currentValue.length > 2) {
        fetchIngredients(currentValue)
          .then((ingredients) => {
            if (
              currentValue.toLowerCase() === ingredients.data[0].attributes.name &&
              ingredients.data.length === 1
            ) {
              setData(undefined);
            } else {
              setData(ingredients.data);
            }
          })
          .catch((e) => setError(e))
          .finally(() => {
            setLoading(false);
          });
      } else {
        setData(undefined);
      }
    }
  }, [currentValue]);

  return { data, error, loading };
};
