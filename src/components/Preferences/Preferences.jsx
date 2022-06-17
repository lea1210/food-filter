import Styles from "./Preferences.module.css";
import {Checkbox} from "../Checkbox/Checkbox";
import React from "@types/react";
import {usePreferences} from "../../contexts/PreferencesContext/PreferencesContext";

export const Preferences = () => {
    const {changePreferences} = usePreferences();

    const handleOnChange = (name, value) => {
        changePreferences(name, value);
    }

    return (
        <>
            <Checkbox name={"vegan"} onChange={changePreferences(name, value)}>
                <label>vegan</label>
            </Checkbox>
            <Checkbox name={"vegetarian"} onChange={changePreferences(name, value)}>
                <label>vegetarisch</label>
            </Checkbox>
            <Checkbox name={"lactosefree"} onChange={changePreferences(name, value)}>
                <label>laktosefrei</label>
            </Checkbox>
            <Checkbox name={"glutenfree"} onChange={changePreferences(name, value)}>
                <label>glutenfrei</label>
            </Checkbox>
        </>
    );
};