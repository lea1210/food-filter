import Styles from  './App.module.css';
import {Layout} from "./components/Layout/Layout";

import Page from "./pages/home";


function App() {
  return (
    <div className="wrapper">
      <Layout>
        <Page className={Styles.page}/>
      </Layout>
    </div>
  );
}

export default App;
