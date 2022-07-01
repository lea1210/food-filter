import Styles from "./IngredientSuggestion.module.css";
import {useSearchValue} from "../../contexts/SearchValueContext/SearchValueContext";

export const IngredientSuggestion = ({ingredients}) => {
    const {setSearchValue} = useSearchValue();

     const onClickSuggestion = (name) => {
         console.log(name);
         setSearchValue(name);
     }

    if (ingredients === undefined || ingredients.length < 1) {
        return(
            <>
            </>
        );
    }else{
        return (
            <>
                <div>
                    {ingredients.map((ingredient) =>
                        (
                            <div className={Styles.suggestion} key={ingredient.attributes.name} onClick={() => setSearchValue(ingredient.attributes.name)}>{ingredient.attributes.name}</div>
                        ))
                    }
                </div>
            </>
        );
    }


};
