import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Styles from "./Layout.module.css";
import IngredientTag from "../IngredientTag/IngredientTag";

const ingredients = ["käse", "salami", "nutella"];

export const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <div className={Styles.content}>{children}
            <IngredientTag ingredients={ingredients}></IngredientTag>
            </div>
            <Footer></Footer>
        </>
    );
};