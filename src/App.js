import Styles from  './App.module.css';
import {Layout} from "./components/Layout/Layout";

import Page from "./pages/home";
import {LoginContextProvider} from "./contexts/LoginContext/LoginContext";
import {LoginFormContextProvider} from "./contexts/LoginFormContext/LoginFormContext";
import {RegistrationContextProvider} from "./contexts/RegistrationContext/RegistrationContext";
import {UserInfoContextProvider} from "./contexts/UserInfoContext/UserInfoContext";
import {IngredientContext, IngredientContextProvider} from "./contexts/IngredientContext/IngredientContext";
import {ExcludedContextProvider} from "./contexts/ExcludedContext/ExcludedContext";

function App() {
  return (
    <div className="wrapper">
        <UserInfoContextProvider>
        <RegistrationContextProvider>
            <LoginFormContextProvider>
                <IngredientContextProvider>
                    <ExcludedContextProvider>
                        <LoginContextProvider>
                              <Layout>
                                <Page className={Styles.page}/>
                              </Layout>
                        </LoginContextProvider>
                    </ExcludedContextProvider>
            </IngredientContextProvider>
            </LoginFormContextProvider>
        </RegistrationContextProvider>
        </UserInfoContextProvider>
    </div>
  );
}

export default App;
