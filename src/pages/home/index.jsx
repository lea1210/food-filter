import {IngredientSearch} from "../../components/IngredientSearch/IngredientSearch";
import Styles from "./index.module.css";
import {IngredientTags} from "../../components/IngredientTags/IngredientTags";
import {Preferences} from "../../components/Preferences/Preferences";

const Page = () => {
    //const [formState, setFormState] = useState({});

    // const recipeData = useRecipesData();
    return (
        <>
            <IngredientSearch className={Styles.flex}/>
            <IngredientTags></IngredientTags>
            <Preferences></Preferences>
        </>
        //später   <Result {...recipeData} /> einfügen

    );
};

export default Page;