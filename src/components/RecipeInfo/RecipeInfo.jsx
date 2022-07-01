import React from "react";
import Style from "../RecipeInfo/RecipeInfo.modules.css";

export const RecipeInfo = ({bool}) => {
    console.log(bool);
    if (bool === true) {
        return (
            <div className={Style.dotPos}>
                <span className={Style.dotGreen}>Ja</span>
            </div>
        );
    } else {
        return (
            <div className={Style.dotPos}>
                <span className={Style.dotRed}>Nein</span>
            </div>
        );
    }

}

export default RecipeInfo;


