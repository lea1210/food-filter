import {useIngredients} from "../../contexts/IngredientContext/IngredientContext";
import {useExcludedIngredients} from "../../contexts/ExcludedContext/ExcludedContext";
import IngredientList from "../IngredientList/IngredientList";
import Styles from "./IngredientTags.module.css";

export const IngredientTags = () => {
    //temporary
    const ingredients = [{name: "käse"}, {name:"salami"}, {name:"nutella"}];

    const {ingredientList} = useIngredients();
    const {excludedList} = useExcludedIngredients();

    //hier 2x igredeintlist, einmal ingredientlist übergebenn, einmal excluded

    return(
        <>
            <div className={Styles.upperBox}>
              <label className={Styles.headline}>Zutaten</label>
              <IngredientList ingredients={ingredientList} color={"dark"}></IngredientList>
            </div>
            <div className={Styles.secondBox}>
             <label className={Styles.headline}>Ausgeschlossene Zutaten</label>
             <IngredientList ingredients={excludedList} color={"light"}></IngredientList>
            </div>
        </>
    );

}