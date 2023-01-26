// import React, { useState, useEffect } from 'react'

// function CountryData() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.covid19api.com/total/dayone/country/Kenya")
//     .then(resp => resp.json())
//     .then(data => setData(data))
//   }, []);

//   return (
//     <div className='data-table'>
//         <table>
//         <thead>
//           <tr>
//             <th>Confirmed</th>
//             <th>Deaths</th>
//             <th>Active</th>
//             <th>Date</th>
//            </tr>
//         </thead>
//         <tbody>
//         {data.map((item, index) => 
//         <tr key={index}>
//           <td>{item.Confirmed}</td>
//           <td>{item.Deaths}</td>
//           <td>{item.Active}</td>
//           <td>{item.Date}</td>
//       </tr>)}
//   </tbody>
//         </table>
//     </div>
//   )
// }

// export default CountryData

import React, { useState, useEffect } from 'react'

function CountryData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.covid19api.com/total/dayone/country/USA`)
    .then(resp => resp.json())
    .then(data => {
      const dayOneData = data.filter(item => item.Date.split('T')[0] === '2020-01-22')
      setData(dayOneData)
    })
  }, []);

  return (
    <div>
        <table className="data-table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Confirmed</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Date</th>
           </tr>
        </thead>
        <tbody>
        {data.map((item, index) => 
        <tr key={index}>
        <td>{item.Country}</td>
        <td>{item.Confirmed}</td>
        <td>{item.Deaths}</td>
        <td>{item.Active}</td>
        <td>{item.Date}</td>
      </tr>)}
  </tbody>
        </table>
    </div>
  )
}

export default CountryData