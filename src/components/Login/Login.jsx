import Styles from "../Login/Login.module.css";
import {LoginFormContext, useLoginForm} from "../../contexts/LoginFormContext/LoginFormContext";
import UserInfo from "../UserInfo/UserInfo";
import {useLogin} from "../../contexts/LoginContext/LoginContext";
import {useCallback, useState} from "react";
import {Input} from "../Input/Input";
import Form from "../Form/Form";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {isLoginFormOpened, closeLoginForm} = useLoginForm();
    const { isLoggedIn, login, logout } = useLogin();
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    console.log("set is open in login: ", setIsOpen);

  const onSubmitLoginForm = useCallback(() => {
       /* console.log("im submitloginform");
        if (isLoggedIn){
            logout();
        } else{
            console.log("will einloggen");
            login(user, password);
        }
        setIsOpen(true);*/
    }, [user, password, login])

    const openUserForm = (isOpen) => {
     // setIsOpen(isOpen);
        console.log("aaaaaaaaaaaa");
    }

    return (
        <>
            {isLoginFormOpened && (
                <div className={Styles.loginWindow}>
                    <LoginForm onSubmit={onSubmitLoginForm} setIsOpen={openUserForm}/>
                    {isOpen && <UserInfo setIsOpen={setIsOpen}/>}
                </div>
            )}
        </>
    );
    /*return(
        <>
            {isLoginFormOpened && (
                <div className={Styles.loginWindow}>
                    <Form onSubmit={onSubmitLoginForm}>
                        <Input
                            type="text"
                            placeholder="username"
                            value={user}
                            onChange={(value) => setUser(value)}
                        />
                        <Input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(value) => setPassword(value)}
                        />
                        <button type="submit">Login</button>
                    </Form>
                    {isOpen && <UserInfo setIsOpen={setIsOpen}/>}
                </div>
            )}
        </>
    );*/
};

export default Login;

/* <Form onSubmit={onSubmitLoginForm}>
                        <Input
                            type="text"
                            placeholder="username"
                            value={user}
                            onChange={(value) => setUser(value)}
                        />
                        <Input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(value) => setPassword(value)}
                        />
                        <button type="submit">Login</button>
                    </Form>*/


