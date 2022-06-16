import Styles from "./IngredientSearch.module.css";

export const IngredientSearch = () => {
    return (
        <div className={Styles.ingredientSearch}>
            <h2 className={Styles.headerText}>Welche Zutaten hast du zuhause?</h2>
            <div>
                <input type="text" className={Styles.centerInput}/><br/>
            </div>
            <div>
                <button className={Styles.input}>Hinzufügen</button>
                <button className={Styles.input}>Ausschließen</button>
            </div>
            <button className={Styles.search}>Suchen</button>
        </div>
    );
};
