import Styles from  './App.module.css';
import {Layout} from "./components/Layout/Layout";

import Page from "./pages/home";
import {LoginContextProvider} from "./contexts/LoginContext/LoginContext";
import {LoginFormContextProvider} from "./contexts/LoginFormContext/LoginFormContext";
import {RegistrationContextProvider} from "./contexts/RegistrationContext/RegistrationContext";
import {UserInfoContextProvider} from "./contexts/UserInfoContext/UserInfoContext";
import RegistrationFormContextWrapper from "./components/RegistrationForm/RegistrationForm";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";

function App() {
  return (
      <BrowserRouter>
    <div className="wrapper">
        <RegistrationContextProvider>
            <LoginFormContextProvider>
                <LoginContextProvider>
                    <UserInfoContextProvider>
                      <Layout>
                          <Routes>
                              <Route path="/" element={<Page className={Styles.page}/>}/>
                              <Route path="/register" element={<RegistrationFormContextWrapper/>}/>
                          </Routes>
                      </Layout>
                    </UserInfoContextProvider>
                </LoginContextProvider>
            </LoginFormContextProvider>
        </RegistrationContextProvider>
    </div>
      </BrowserRouter>
  );
}

export default App;
