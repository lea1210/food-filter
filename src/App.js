import './App.css';
import {Layout} from "./components/Layout/Layout";
import Home from "./pages";
import {LoginContextProvider} from "./contexts/LoginContext/LoginContext";
import {LoginFormContextProvider} from "./contexts/LoginFormContext/LoginFormContext";

function App() {
  return (
    <div className="wrapper">
        <LoginFormContextProvider>
        <LoginContextProvider>

      <Layout>
          <Home/>
      </Layout>

        </LoginContextProvider>
        </LoginFormContextProvider>
    </div>
  );
}

export default App;
