import {
  BrowserRouter as Router 
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/template/SideBar/Sidebar'
import './assets/css/styles.css'




  



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