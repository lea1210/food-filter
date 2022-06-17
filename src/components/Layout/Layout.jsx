import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Styles from "./Layout.module.css";
import IngredientList from "../IngredientList/IngredientList";

const ingredients = ["käse", "salami", "nutella"];

export const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <div className={Styles.content}>{children}
            </div>
            <Footer></Footer>
        </>
    );
};