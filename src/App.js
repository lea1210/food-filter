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
        <RegistrationContextProvider>
            <LoginFormContextProvider>
                <LoginContextProvider>
                    <UserInfoContextProvider>
                      <Layout>
                        <Page className={Styles.page}/>
                      </Layout>
                    </UserInfoContextProvider>
                </LoginContextProvider>
            </LoginFormContextProvider>
        </RegistrationContextProvider>
    </div>
  );
}

export default App;
