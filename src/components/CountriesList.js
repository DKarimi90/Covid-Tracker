import React, {useEffect} from 'react'
import {useState} from "react"
function CountriesList() {
  const [countries, setCountries] = useState([])
  const [searchValue, setSearchValue] = useState('')
 

  useEffect(() => {
    
    fetch(`https://disease.sh/v3/covid-19/countries`)
    .then(res => res.json())
    .then(countries => 

        setCountries(countries)
    )
  }, [])

  function handleSearch(e) {
  setSearchValue(e.target.value)
  }
  const handleClick = async (e) => {
    const country = e.target.value 
    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }
  

  const filteredCountries = countries.filter(country => {
    return country.country.toLowerCase().includes(searchValue.toLowerCase())
  })
  const countryList = filteredCountries.map((country,index) => (
    <li onClick={handleClick} key={index}>{country.country} {country.countryInfo.iso2}</li>
   
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