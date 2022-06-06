import './App.css';
import {Layout} from "./components/Layout/Layout";
import Home from "./pages";
import {LoginContextProvider} from "./contexts/LoginContext/LoginContext";
import {LoginFormContextProvider} from "./contexts/LoginFormContext/LoginFormContext";
import {RegistrationContextProvider} from "./contexts/RegistrationContext/RegistrationContext";

function App() {
  return (
    <div className="wrapper">
        <RegistrationContextProvider>
        <LoginFormContextProvider>
        <LoginContextProvider>

      <Layout>
          <Home/>
      </Layout>

        </LoginContextProvider>
        </LoginFormContextProvider>
        </RegistrationContextProvider>
    </div>
  );
}

export default App;
