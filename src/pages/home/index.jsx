import {IngredientSearch} from "../../components/IngredientSearch/IngredientSearch";
import Styles from "./index.module.css";
import {IngredientTags} from "../../components/IngredientTags/IngredientTags";
import {useRecipesData} from "../../hooks/useRecipesData";
import {Result} from "../../components/Result/Result";
import {useIngredients} from "../../contexts/IngredientContext/IngredientContext";

const Page = () => {
    //const [formState, setFormState] = useState({});
    const {ingredientList} = useIngredients();

    const {loading, error, data, loadRecipes} = useRecipesData(ingredientList);
    console.log("Data: ",data);
    return (
        <>
            <IngredientSearch loadRecipes={loadRecipes} className={Styles.flex}/>
            <IngredientTags></IngredientTags>
            <Result error={error} loading={loading} data={data} {...data} />
        </>


    );
};

export default Page;