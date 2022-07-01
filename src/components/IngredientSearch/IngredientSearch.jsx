import Styles from "./IngredientSearch.module.css";
import {useIngredients} from "../../hooks/useIngredients";
import {useExcludedIngredients} from "../../contexts/ExcludedContext/ExcludedContext";
import {useRecipesData} from "../../hooks/useRecipesData";
import {useState} from "react";
import {IngredientSuggestion} from "../IngredientSuggestion/IngredientSuggestion";

export const IngredientSearch = ({loadRecipes}) => {
    const [inputValue, setInputValue] = useState("");
    const {addIngredient} = useIngredients();
    const {addExcluded} = useExcludedIngredients();
   // const { loadRecipes } = useRecipesData();
    const {data} = useIngredients(inputValue);

    const onClickSearch = () => {
        loadRecipes();

    }

    const onClickAdd = (e) => {
        addIngredient(inputValue);
        setInputValue("");
    }

    const onClickExclude = () => {
        addExcluded(inputValue);
        setInputValue("");
    }

    return (
        <div className={Styles.ingredientSearch}>
            <h2 className={Styles.headerText}>Welche Zutaten hast du zuhause?</h2>
            <div>
                <input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} className={Styles.centerInput}/><br/>
                <IngredientSuggestion data={data}/>
            </div>
            <div>
                <button className={Styles.input} onClick={onClickAdd}>Hinzufügen</button>
                <button className={Styles.input} onClick={onClickExclude}>Ausschließen</button>
            </div>
            <button className={Styles.search} onClick={onClickSearch}>Suchen</button>
        </div>
    );
};
