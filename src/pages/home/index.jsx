import {IngredientSearch} from "../../components/IngredientSearch/IngredientSearch";
import Styles from "./index.module.css";

const Page = () => {
    //const [formState, setFormState] = useState({});

    // const recipeData = useRecipesData();
    return (
        <IngredientSearch className={Styles.flex}/>

        //später   <Result {...recipeData} /> einfügen

    );
};

export default Page;