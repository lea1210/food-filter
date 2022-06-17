import {IngredientSearch} from "../../components/IngredientSearch/IngredientSearch";
import Styles from "./index.module.css";
import {IngredientTags} from "../../components/IngredientTags/IngredientTags";

const Page = () => {
    //const [formState, setFormState] = useState({});

    // const recipeData = useRecipesData();
    return (
        <>
            <IngredientSearch className={Styles.flex}/>
            <IngredientTags></IngredientTags>
        </>
        //später   <Result {...recipeData} /> einfügen

    );
};

export default Page;