import Styles from "./Preferences.module.css";
import {Checkbox} from "../Checkbox/Checkbox";
import {usePreferences} from "../../contexts/PreferencesContext/PreferencesContext";
import React, {useEffect} from "react";
import {getUser} from "../../contexts/LoginContext/login";
import {useLogin} from "../../contexts/LoginContext/LoginContext";

export const Preferences = () => {
    const user = getUser();
    const { isLoggedIn } = useLogin();
    const {handleChangeVegan, handleChangeVegetarian, handleChangeLactosefree, handleChangeGlutenfree} = usePreferences();

    useEffect(() => {
        console.log("im useeffect", isLoggedIn);
        if (isLoggedIn) {
            console.log("im login");
            handleChangeVegan(user.vegan);
            handleChangeVegetarian(user.vegetarian);
            handleChangeLactosefree(user.lactosefree);
            handleChangeGlutenfree(user.glutenfree);
        }
    }, [isLoggedIn, user]);

    if(user) {
        return (
            <>
                <div className={Styles.checkboxes}>
                    <Checkbox checked={user.vegan} onChange={handleChangeVegan}>
                        <label>vegan</label>
                    </Checkbox>
                    <Checkbox checked={user.vegetarian} onChange={handleChangeVegetarian}>
                        <label>vegetarisch</label>
                    </Checkbox>
                    <Checkbox checked={user.lactosefree} onChange={handleChangeLactosefree}>
                        <label>laktosefrei</label>
                    </Checkbox>
                    <Checkbox checked={user.glutenfree} onChange={handleChangeGlutenfree}>
                        <label>glutenfrei</label>
                    </Checkbox>
                </div>
            </>
        );
    }

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