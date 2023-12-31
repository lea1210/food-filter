import Styles from '../Login/Login.module.css';
import { useLoginForm } from '../../contexts/LoginFormContext/LoginFormContext';
import UserInfo from '../UserInfo/UserInfo';
import LoginForm from '../LoginForm/LoginForm';
import { useUser } from '../../contexts/UserInfoContext/UserInfoContext';

/**
 * holds the login form and user info
 * @returns {JSX.Element}
 * @constructor
 */
const Login = () => {
  const { isUserInfoOpened } = useUser();
  const { isLoginFormOpened } = useLoginForm();

  return (
    <>
      {isLoginFormOpened && (
        <div className={Styles.loginWindow}>
          <LoginForm />
        </div>
      )}
      {isUserInfoOpened && <UserInfo />}
    </>
  );
};

export default Login;
