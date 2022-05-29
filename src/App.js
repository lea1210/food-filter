import './App.css';
import {Layout} from "./components/Layout/Layout";

import Page from "./pages/home";

function App() {
  return (
    <div className="wrapper">
      <Layout>
        <Page/>
      </Layout>
    </div>
  );
}

export default App;
