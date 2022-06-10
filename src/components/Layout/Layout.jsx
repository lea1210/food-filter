import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { RecipePreview } from "../RecipePreview/RecipePreview";
import Styles from "./Layout.module.css";
import {Recipe} from "../Recipe/Recipe";


export const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <div className={Styles.content}>{children}</div>
            <RecipePreview recipe={"Gulasch"}></RecipePreview>
            <Footer></Footer>
        </>
    );
};