import Styles from './Preferences.module.css';
import { Checkbox } from '../Checkbox/Checkbox';
import { usePreferences } from '../../contexts/PreferencesContext/PreferencesContext';
import React, { useEffect } from 'react';
import { getUser } from '../../contexts/LoginContext/login';
import { useLogin } from '../../contexts/LoginContext/LoginContext';
import { useUser } from '../../contexts/UserInfoContext/UserInfoContext';

export const Preferences = () => {
  const user = getUser();
  const { isLoggedIn } = useLogin();
  const { isUpdated } = useUser();
  const {
    handleChangeVegan,
    handleChangeVegetarian,
    handleChangeLactosefree,
    handleChangeGlutenfree,
    isVegan,
    isVegetarian,
    isGlutenfree,
    isLactosefree
  } = usePreferences();

  useEffect(() => {
    if (isLoggedIn) {
      handleChangeVegan(user.vegan);
      handleChangeVegetarian(user.vegetarian);
      handleChangeLactosefree(user.lactosefree);
      handleChangeGlutenfree(user.glutenfree);
    }
  }, [isLoggedIn, isUpdated]);

  return (
    <>
      <div className={Styles.checkboxes}>
        <Checkbox checked={isVegan} onChange={handleChangeVegan}>
          <label>vegan</label>
        </Checkbox>
        <Checkbox checked={isVegetarian} onChange={handleChangeVegetarian}>
          <label>vegetarisch</label>
        </Checkbox>
        <Checkbox checked={isLactosefree} onChange={handleChangeLactosefree}>
          <label>laktosefrei</label>
        </Checkbox>
        <Checkbox checked={isGlutenfree} onChange={handleChangeGlutenfree}>
          <label>glutenfrei</label>
        </Checkbox>
      </div>
    </>
  );
};
