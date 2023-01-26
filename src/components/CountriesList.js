import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';
// import "./CovidData.css";
function CountriesList({handleCountryChange}) {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
      });
  }, []);
  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };
  const handleSelect = (country) =>{
    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <React.Fragment>
    <div className="covidData">
      <h1>COVID-19 CASES WORLD WIDE</h1>
      <div className="covidData__input">
        <form onSubmit={handleSubmit}>
          {/* input county name */}
      <FormControl className="formControl">
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
      <option value="">United States</option>
        {countries.map((country, i) => <option key={i} value={country} onSelect={handleSelect}>{country.country}</option>)}
      </NativeSelect>
      <input className="search_country" onChange={handleSearch} placeholder="Search Country Name"/>
    </FormControl>
        </form>
      </div>
      {/* Showing the details of the country */}
      <div className="covidData__country__info">
        <p>Country Name : {country} </p>
        <p>Cases : {cases}</p>
        <p>Deaths : {deaths}</p>
        <p>Recovered : {recovered}</p>
        <p>Cases Today : {todayCases}</p>
        <p>Deaths Today : {deathCases}</p>
        <p>Recovered Today : {recoveredCases}</p>
      </div>
    </div>
    {/* Summary of all day one cases on a table */}
    <div className="summary--data">
  </div>
  </React.Fragment>
  );
}
export default CountriesList;