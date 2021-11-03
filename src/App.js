import {
  BrowserRouter as Router 
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/template/NavBar/Nav'
import Sidebar from './components/template/SideBar/Sidebar'
import './assets/css/styles.css'


function App() {
  return (
    <>
      <Nav/>
      <Sidebar/>
      <Router>
        <Routes/>
      </Router>
      

      
    </>
  );
}

export default App;