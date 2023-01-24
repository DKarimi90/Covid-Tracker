import './App.css';
import Home from "./views/Home"
import NavBar from "./components/NavBar"
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <CountriesList/>

      
    </div>
  );
}

export default App;
