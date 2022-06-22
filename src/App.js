import Styles from './App.module.css';
import {Layout} from "./components/Layout/Layout";

import Page from "./pages/home";
import {LoginContextProvider} from "./contexts/LoginContext/LoginContext";
import {LoginFormContextProvider} from "./contexts/LoginFormContext/LoginFormContext";
import {RegistrationContextProvider} from "./contexts/RegistrationContext/RegistrationContext";
import {UserInfoContextProvider} from "./contexts/UserInfoContext/UserInfoContext";
import RegistrationFormContextWrapper from "./components/RegistrationForm/RegistrationForm";
import {BrowserRouter, Route} from "react-router-dom";
import {Routes} from "react-router";
import {IngredientContext, IngredientContextProvider} from "./contexts/IngredientContext/IngredientContext";
import {ExcludedContextProvider} from "./contexts/ExcludedContext/ExcludedContext";
import {PreferencesContextProvider} from "./contexts/PreferencesContext/PreferencesContext";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <UserInfoContextProvider>
                    <RegistrationContextProvider>
                        <LoginFormContextProvider>
                            <PreferencesContextProvider>
                                <IngredientContextProvider>
                                    <ExcludedContextProvider>
                                        <LoginContextProvider>
                                            <Layout>
                                                <Routes>
                                                    <Route path="/" element={<Page className={Styles.page}/>}/>
                                                    <Route path="/register" element={<RegistrationFormContextWrapper/>}/>
                                                </Routes>
                                            </Layout>
                                        </LoginContextProvider>
                                    </ExcludedContextProvider>
                                </IngredientContextProvider>
                            </PreferencesContextProvider>
                        </LoginFormContextProvider>
                    </RegistrationContextProvider>
                </UserInfoContextProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
