import Styles from  './App.module.css';
import {Layout} from "./components/Layout/Layout";

import Page from "./pages/home";
import {LoginContextProvider} from "./contexts/LoginContext/LoginContext";
import {LoginFormContextProvider} from "./contexts/LoginFormContext/LoginFormContext";
import {RegistrationContextProvider} from "./contexts/RegistrationContext/RegistrationContext";
import {UserInfoContextProvider} from "./contexts/UserInfoContext/UserInfoContext";

function App() {
  return (
    <div className="wrapper">
        <UserInfoContextProvider>
        <RegistrationContextProvider>
            <LoginFormContextProvider>
                <LoginContextProvider>
                      <Layout>
                        <Page className={Styles.page}/>
                      </Layout>
                </LoginContextProvider>
            </LoginFormContextProvider>
        </RegistrationContextProvider>
        </UserInfoContextProvider>
    </div>
  );
}

export default App;
