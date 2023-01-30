import './App.css';
import Home from "./views/Home"
import NavBar from "./components/NavBar"
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import CountriesList from './components/CountriesList';
import CountryData from './components/CountryData';
import MainMapp from './components/MainMapp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
    <div className="links">
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/countrieslist" element = {<CountriesList/>}/>
        <Route path = "/countriesdata" element = {<CountryData/>}/>
        <Route path='/map' element={<MainMapp/>}></Route>
        <Route path = "/login" element = {<LogIn/>}/>
        <Route path = "/logout" element = {<LogOut/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
    </div>
  );
}
export default App;


