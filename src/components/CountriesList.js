import React, {useEffect} from 'react'
import {useState} from "react"

function CountriesList() {
  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [data, setData] = useState([])

  // function to fetch and list the countries 

  useEffect(() => {
    fetch(`https://api.covid19api.com/countries`)
    .then(res => res.json())
    .then(countries => setCountries(countries))
  }, [])

  function handleSearch(e) {
    setSearchValue(e.target.value)
  }



// function to display covid data for only selected country 

  function onChange() {
    fetch(`https://disease.sh/v3/covid-19/countries`)
    .then(res => res.json())
    .then(data=> {
      setData(data)
      console.log(data)
      data.map(country => {
        <div>{country.id} {country.critical} {country.recorded}</div>
      })
    })
  }
 





  const filteredCountries = countries.filter(country => {
    return country.Country.toLowerCase().includes(searchValue.toLowerCase())
  })

  const countryList = filteredCountries.map((country, index) => (
    <li key={index}>{country.Country}</li>
  ))

  return (
    <div>
      <h3>list of countries</h3>
      <input className="search" type="text" value={searchValue} onChange={handleSearch} placeholder="Search for a country" />

      <ul>
        {countryList}
      </ul>
      {data && (
    <div>
      <h3>Selected country data</h3>
      <p>Country: {data.country}</p>
      <p>Critical cases: {data.critical}</p>
      <p>Recorded cases: {data.cases}</p>
    </div>
  )}

    </div>
  )
}

export default CountriesList; 
