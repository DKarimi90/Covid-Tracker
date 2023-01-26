import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CountriesList from './components/CountriesList';
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import Footer from './components/Footer';
import CountryData from './components/CountryData';
import Map from './components/Map';



function App() {
  return (
      <div className="App">
        <Router>
          <div className='links'>
          <NavBar />
          </div>
         <Routes>
           <Route path = "/" element = {<Home />}/>
           <Route path = "/CountriesList" element = {<CountriesList />}/>
           <Route path = "/CountryData" element = {<CountryData />}/>
           <Route path = "/Map" element = {<Map />}/>
           <Route path = "/LogIn" element = {<LogIn />}/>
           <Route path = "/LogOut" element = {<LogOut />}/>
         </Routes>
         <div className = "footer">
          <Footer />
      </div >
        </Router>
      </div>

  );
}

export default App;
