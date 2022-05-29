import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Styles from "./Layout.module.css";

export const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <div className={Styles.content}>{children}</div>
            <Footer></Footer>
        </>
    );
};