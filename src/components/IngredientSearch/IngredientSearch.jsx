import Styles from "./IngredientSearch.module.css";
import {useIngredientsData} from "../../hooks/useIngredients";
import {useExcludedIngredients} from "../../contexts/ExcludedContext/ExcludedContext";
import {useRecipesData} from "../../hooks/useRecipesData";
import {useState} from "react";
import {IngredientSuggestion} from "../IngredientSuggestion/IngredientSuggestion";
import {useIngredients} from "../../contexts/IngredientContext/IngredientContext";
import {useSearchValue} from "../../contexts/SearchValueContext/SearchValueContext";

export const IngredientSearch = ({loadRecipes}) => {
    const{searchValue, setSearchValue} = useSearchValue();
    const [inputValue, setInputValue] = useState("");
    const {addIngredient} = useIngredients();
    const {addExcluded} = useExcludedIngredients();
   // const { loadRecipes } = useRecipesData();
    const {data} = useIngredientsData(searchValue);

    const onClickSearch = () => {
        loadRecipes();
    }

    const onClickAdd = (e) => {
        addIngredient(searchValue);
        setSearchValue("");
        setInputValue("");
    }

    const onClickExclude = () => {
        addExcluded(searchValue);
        setSearchValue("");
        setInputValue("");
    }

    return (
        <div className={Styles.ingredientSearch}>
            <h2 className={Styles.headerText}>Welche Zutaten hast du zuhause?</h2>
            <div>
                <input type="text" onChange={e => setSearchValue(e.target.value)} value={searchValue} className={Styles.centerInput}/><br/>
                <IngredientSuggestion ingredients={data}/>
            </div>
            <div>
                <button className={Styles.input} onClick={onClickAdd}>Hinzufügen</button>
                <button className={Styles.input} onClick={onClickExclude}>Ausschließen</button>
            </div>
            <button className={Styles.search} onClick={onClickSearch}>Suchen</button>
        </div>
    );
};
