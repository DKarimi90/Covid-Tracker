import './App.css';
import Home from "./views/Home"
import NavBar from "./components/NavBar"
import CountriesList from './components/CountriesList';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className='App'>
      <Router>
    <div className="links">
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/countrylist" element = {<CountriesList/>}/>
        <Route path = "/login" element = {<LogIn/>}/>
        <Route path = "/logout" element = {<LogOut/>}/>
      </Routes>
    
    </div>
    </Router>
    </div>
  );
}

export default App;
