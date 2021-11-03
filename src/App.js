import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/template/NavBar/Nav'
import NavLateral from './components/template/NavBarLateral/NavLateral'


function App() {
  return (
    <>
      <Nav/>
      <NavLateral/>
      <Router>
        <Routes/>
      </Router>
      

      
    </>
  );
}

export default App;