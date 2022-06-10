import Styles from "./UserInfo.module.css";
import {useLogin} from "../../contexts/LoginContext/LoginContext";
import {useUserInfo} from "../../contexts/UserInfoContext/UserInfoContext";
import {getUser} from "../../contexts/LoginContext/login";
import {Checkbox} from "../Checkbox/Checkbox";
import React, {useState} from "react";
import {setNewUserInfo} from "../../hooks/useUserInfo";

const UserInfo = () => {
    const [ updatedUserInfo, setUpdatedUserInfo ] = useState(false);
    const { userName, logout} = useLogin();
    const { closeUserInfo, isUserInfoOpened} = useUserInfo();

    const user = getUser();

    const [isVegan, setIsVegan] = useState(user.vegan);
    const [isVegetarian, setIsVegetarian] = useState(user.vegetarian);
    const [isGlutenfree, setIsGlutenfree] = useState(user.glutenfree);
    const [isLactosefree, setIsLactosefree] = useState(user.lactosefree);

    const onClickLogout = () => {
        logout();
        closeUserInfo();
    }

    const onClickSave = () => {
        setNewUserInfo(user.id, isVegan, isVegetarian, isLactosefree, isGlutenfree).then((result) => setUpdatedUserInfo(result));
        closeUserInfo();
    }

    const onClickCancel = () => {
        closeUserInfo();
    }

    return (
        <>
                <div className={Styles.userInfoBackdrop}>
                    <div className={Styles.userInfo}>
                        <div className={Styles.userInfoContent}>
                            <img className={Styles.profileImg} alt="user image" src="icons/user_green.png"/>
                            <div className={Styles.headline}>{user.username}</div>
                            <label>Deine Präferenzen: </label>
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
                            <div className={Styles.buttonBox}>
                                <button className={Styles.saveButton} onClick={onClickSave}>Speichern</button>
                                <button className={Styles.logoutButton} onClick={onClickLogout}>Logout</button>
                                <button className={Styles.cancelButton} onClick={onClickCancel}>Abbrechen</button>
                            </div>
                        </div>
                    </div>
                </div>

        </>
    );
};

export default UserInfo;
