import {IngredientSearch} from "../../components/IngredientSearch/IngredientSearch";
import Styles from "./index.module.css";
import {IngredientTags} from "../../components/IngredientTags/IngredientTags";
import {useRecipesData} from "../../hooks/useRecipesData";
import {Result} from "../../components/Result/Result";
import {useState} from "react";

const Page = () => {
    const [formState, setFormState] = useState({});

    const data = useRecipesData();
    console.log("Data: ",data);
    return (
        <>
            <IngredientSearch className={Styles.flex}/>
            <IngredientTags></IngredientTags>
            <Result {...data} />
        </>


    );
};

export default Page;