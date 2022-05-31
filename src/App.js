import './App.css';
import {Layout} from "./components/Layout/Layout";
import Home from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Layout>
          <Home/>
      </Layout>
    </div>
  );
}

export default App;
