import {
  BrowserRouter as Router 
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/template/SideBar/Sidebar'
import './assets/css/styles.css'
import ScriptTag from 'react-script-tag';


const Demo = props => (
  <ScriptTag type="text/javascript" src="../" />
  )



function App() {
  return (
    <>
    <body class="sidebar-menu-collapsed">
      
      <Router>
        <Routes/>
      </Router>
      
      </body>

      
    </>
  );
}

export default App;