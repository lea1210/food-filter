import Styles from './UserInfo.module.css';
import { useLogin } from '../../contexts/LoginContext/LoginContext';
import { useUser } from '../../contexts/UserInfoContext/UserInfoContext';
import { getUser } from '../../contexts/LoginContext/login';
import { Checkbox } from '../Checkbox/Checkbox';
import React, { useState } from 'react';
import { setNewUserInfo } from '../../hooks/useUserInfo';

const UserInfo = () => {
  const [setUpdatedUserInfo] = useState(false);
  const { logout } = useLogin();
  const { setIsUpdated } = useUser();
  const { closeUserInfo } = useUser();

  const user = getUser();

  const [isVegan, setIsVegan] = useState(user.vegan);
  const [isVegetarian, setIsVegetarian] = useState(user.vegetarian);
  const [isGlutenfree, setIsGlutenfree] = useState(user.glutenfree);
  const [isLactosefree, setIsLactosefree] = useState(user.lactosefree);

  const onClickLogout = () => {
    logout();
    closeUserInfo();
  };

  const onClickSave = () => {
    setIsUpdated(false);
    setNewUserInfo(user.id, isVegan, isVegetarian, isLactosefree, isGlutenfree).then((result) => {
      setUpdatedUserInfo(result);
      setIsUpdated(true);
    });
    closeUserInfo();
  };

  const onClickCancel = () => {
    closeUserInfo();
  };

  return (
    <>
      <div className={Styles.userInfoBackdrop}>
        <div className={Styles.userInfo}>
          <div className={Styles.userInfoContent}>
            <div className={Styles.topBox}>
              <div className={Styles.left}>
                <img className={Styles.profileImg} alt="user image" src="icons/userinfo.svg" />
              </div>
              <div className={Styles.right}>
                <label className={Styles.greeting}>Hallo, </label>
                <label className={Styles.headline}>{user.username}</label>
                <br />
                <label className={Styles.infotext}>
                  Deine Präferenzen kannst du hier ganz <br /> einfach anpassen und speichern.{' '}
                </label>
                <div className={Styles.preferences}>
                  <Checkbox checked={isVegan} onChange={setIsVegan}>
                    <label>vegan</label>
                  </Checkbox>
                  <Checkbox checked={isVegetarian} onChange={setIsVegetarian}>
                    <label>vegetarisch</label>
                  </Checkbox>
                  <Checkbox checked={isLactosefree} onChange={setIsLactosefree}>
                    <label>laktosefrei</label>
                  </Checkbox>
                  <Checkbox checked={isGlutenfree} onChange={setIsGlutenfree}>
                    <label>glutenfrei</label>
                  </Checkbox>
                </div>
              </div>
            </div>
            <div className={Styles.buttonBox}>
              <button className={Styles.saveButton} onClick={onClickSave}>
                Speichern
              </button>
              <button className={Styles.logoutButton} onClick={onClickLogout}>
                Logout
              </button>
              <button className={Styles.cancelButton} onClick={onClickCancel}>
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default UserInfo;
