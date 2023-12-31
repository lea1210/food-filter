import Styles from './UserAccountButton.module.css';
import { useLoginForm } from '../../contexts/LoginFormContext/LoginFormContext';
import { useUser } from '../../contexts/UserInfoContext/UserInfoContext';
import { useLogin } from '../../contexts/LoginContext/LoginContext';

/**
 * Button for opening login window or user information
 * @returns {JSX.Element}
 * @constructor
 */
export const UserAccountButton = () => {
  const { openLoginForm, closeLoginForm, isLoginFormOpened } = useLoginForm();
  const { openUserInfo } = useUser();
  const { isLoggedIn, resetError } = useLogin();

  /**
   * Open login window or user information depending on the login status of the user
   */
  const onClick = () => {
    if (isLoggedIn) {
      openUserInfo();
    } else {
      if (isLoginFormOpened) {
        closeLoginForm();
        resetError();
      } else {
        openLoginForm();
      }
    }
  };

  return (
    <div className={Styles.userAccount}>
      <button className={Styles.userAccountBtn} onClick={onClick}>
        <img src="icons/user.png" alt="userinfo" className={Styles.userAccountIcon} />
      </button>
    </div>
  );
};
