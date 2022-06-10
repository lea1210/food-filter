import Styles from "./UserInfo.module.css";
import {useLogin} from "../../contexts/LoginContext/LoginContext";
import {useUserInfo} from "../../contexts/UserInfoContext/UserInfoContext";
import {getUser} from "../../contexts/LoginContext/login";
import {Checkbox} from "../Checkbox/Checkbox";
import React, {useState} from "react";

const UserInfo = () => {
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isGlutenfree, setIsGlutenfree] = useState(false);
    const [isLactosefree, setIsLactosefree] = useState(false);
    const { userName, logout} = useLogin();
    const { closeUserInfo, isUserInfoOpened} = useUserInfo();

    const user = getUser();

    const onClickLogout= () =>{
        logout();
        closeUserInfo();
    }

    return (
        <>
            {isUserInfoOpened&& (

                <div className={Styles.userInfoBackdrop}>
                    <div className={Styles.userInfo}>
                        <div className={Styles.userInfoContent}>
                            <img className={Styles.profileImg} alt="user image" src="icons/user_green.png"/>
                            <div className={Styles.headline}>{user.username}</div>
                            <label>Deine Präferenzen: </label>
                            <div className={Styles.preferences}>
                                <Checkbox checked={user.vegan} onChange={setIsVegan}>
                                    <label>vegan</label>
                                </Checkbox>
                                <Checkbox checked={user.vegetarian} onChange={setIsVegetarian}>
                                    <label>vegetarisch</label>
                                </Checkbox>
                                <Checkbox checked={user.lactosefree} onChange={setIsLactosefree}>
                                    <label>laktosefrei</label>
                                </Checkbox>
                                <Checkbox checked={user.glutenfree} onChange={setIsGlutenfree}>
                                    <label>glutenfrei</label>
                                </Checkbox>
                            </div>
                            <div className={Styles.buttonBox}>
                                <button className={Styles.saveButton} onClick={closeUserInfo}>Speichern</button>
                                <button className={Styles.logoutButton} onClick={onClickLogout}>Logout</button>
                                <button className={Styles.cancelButton} onClick={closeUserInfo}>Abbrechen</button>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default UserInfo;
