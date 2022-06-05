import Styles from "../Login/Login.module.css";
import {useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";
import UserInfo from "../UserInfo/UserInfo";
import {useState} from "react";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {isLoginFormOpened, closeLoginForm} = useLoginForm();

    return (
        <>
            {isLoginFormOpened && (
                <div className={Styles.loginWindow}>
                    <LoginForm setIsOpen={setIsOpen}/>
                    {isOpen && <UserInfo setIsOpen={setIsOpen}/>}
                </div>
            )}
        </>
    );
};

export default Login;


