import {IngredientSearch} from "../../components/IngredientSearch/IngredientSearch";
import Styles from "./index.module.css";
import IngredientList from "../../components/IngredientList/IngredientList";

//temporary
const ingredients = [{name: "käse"}, {name:"salami"}, {name:"nutella"}];

const Page = () => {
    //const [formState, setFormState] = useState({});

    // const recipeData = useRecipesData();
    return (
        <>
            <IngredientSearch className={Styles.flex}/>
            <IngredientList ingredients={ingredients}></IngredientList>
        </>
        //später   <Result {...recipeData} /> einfügen

    );
};

export default Page;