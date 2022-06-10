import Styles from "./IngredientSearch.module.css";
import { useRecipesData } from "../../hooks/useRecipesData";

const OnClickSearch = () => {
    const ingredientList = ["Spaghetti", "Tomaten"];
    const excludedList = [];
    console.log("bin in der funktion");
    const data = useRecipesData(["Spaghetti", "Tomate"], [], false, false, false, false);
    console.log(data);

    return (
        <>
        </>
    );

}
export const IngredientSearch = () => {
    return (
        <div className={Styles.ingredientSearch}>
            <h2 className={Styles.headerText}>Welche Zutaten hast du zuhause?</h2>
            <input type="text" className={Styles.centerInput}/>
            <div>
                <button className={Styles.input}>Hinzufügen</button>
                <button className={Styles.input}>Ausschließen</button>
            </div>
            <button className={Styles.search} onClick={OnClickSearch}>Suchen</button>
        </div>
    );
};

export default IngredientSearch;