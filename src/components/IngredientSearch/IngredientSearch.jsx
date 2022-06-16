import Styles from "./IngredientSearch.module.css";

const onClickSearch = () => {

}

const onClickAdd = () => {

}

const onClickExclude = () => {

}

export const IngredientSearch = () => {
    return (
        <div className={Styles.ingredientSearch}>
            <h2 className={Styles.headerText}>Welche Zutaten hast du zuhause?</h2>
            <div>
                <input type="text" className={Styles.centerInput}/><br/>
            </div>
            <div>
                <button className={Styles.input} onClick={onClickAdd}>Hinzufügen</button>
                <button className={Styles.input} onClick={onClickExclude}>Ausschließen</button>
            </div>
            <button className={Styles.search} onClick={onClickSearch}>Suchen</button>
        </div>
    );
};
