import Styles from "./IngredientSuggestion.module.css";
import {useIngredients} from "../../hooks/useIngredients";

export const IngredientSuggestion = ({data}) => {

    console.log(data);
    if (data === undefined || data.length < 1) {
        return(
            <>
            </>
        );
    }else{
        return (
            <>
                <div>
                    {data.map((i) =>
                        (
                            <div>{i.attributes.name}</div>
                        ))
                    }
                </div>
            </>
        );
    }


};
