import React, {useEffect} from 'react'
import {useState} from "react"

function CountriesList() {
  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {
    fetch(`https://api.covid19api.com/countries`)
    .then(res => res.json())
    .then(countries => setCountries(countries))
  }, [])
  function handleSearch(e) {
    setSearchValue(e.target.value)
  }
  const filteredCountries = countries.filter(country => {
    return country.Country.toLowerCase().includes(searchValue.toLowerCase())
  })
  const countryList = filteredCountries.map((country) => (
    <li key={country.id}>{country.Country}</li>
  ))
  return (
    <div>
      <h3>list of countries</h3>
      <input className="search" type="text" value={searchValue} onChange={handleSearch} placeholder="Search for a country" />
      <ul>
        {countryList}
      </ul>
    </div>
  )
}
export default CountriesList;