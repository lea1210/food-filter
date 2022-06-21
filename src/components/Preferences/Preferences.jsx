import Styles from "./Preferences.module.css";
import {Checkbox} from "../Checkbox/Checkbox";
import {usePreferences} from "../../contexts/PreferencesContext/PreferencesContext";
import React from "react";

export const Preferences = () => {
    const {handleChangeVegan, handleChangeVegetarian, handleChangeLactosefree, handleChangeGlutenfree} = usePreferences();

    return (
        <>
            <div className={Styles.checkboxes}>
                <Checkbox onChange={handleChangeVegan}>
                    <label>vegan</label>
                </Checkbox>
                <Checkbox onChange={handleChangeVegetarian}>
                    <label>vegetarisch</label>
                </Checkbox>
                <Checkbox onChange={handleChangeLactosefree}>
                    <label>laktosefrei</label>
                </Checkbox>
                <Checkbox onChange={handleChangeGlutenfree}>
                    <label>glutenfrei</label>
                </Checkbox>
            </div>
        </>
    );
};