import React, { useEffect } from 'react'
import { useState } from 'react'
function CountriesList() {
const [countries, setCountries] = useState([])
useEffect(()=>{
fetch(`https://api.covid19api.com/countries`)
.then(res => res.json())
.then(countries => setCountries(countries))
}, [])
console.log(countries)
const countryList = countries.map((country)=>(
    <li>{country.Country}</li>
))
return (
        // function to fetch data
       <div>
        <ul>
            <h3>list of countries</h3>
         {countryList}
        </ul>
       </div>
    )
}
export default CountriesList













