import Styles from './Header.module.css';
import { UserAccountButton } from '../UserAccountButton/UserAccountButton';
import Login from '../Login/Login';
import { useLogin } from '../../contexts/LoginContext/LoginContext';
import UserInfo from '../UserInfo/UserInfo';
import { useUser } from '../../contexts/UserInfoContext/UserInfoContext';

export const Header = () => {
  const { isUserInfoOpened } = useUser();
  const { isLoggedIn } = useLogin();

  //<img src="icons/groceries.png" alt="food" className={Styles.foodIcon} />

  return (
    <header className={Styles.header}>
      <UserAccountButton />
      <h1 className={Styles.headerText}>FoodFilter</h1>
      <img src="icons/lebensmittel1.png" alt="food" className={Styles.foodIcon} />
      {isLoggedIn ? isUserInfoOpened && <UserInfo /> : <Login />}
    </header>
  );
};
