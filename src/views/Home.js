import React from 'react'
function Home() {
  return (
    <div className='Home'>
      <h1>Let's Control Corona Virus</h1>
      <div className ="container">
        <div className='first'>
        <img src = "/images/covid.jpg" alt = "Covid-Thumbnail" />
        </div>
        <div className = 'second'>
          <img src = "images/second.png" alt ="Covid Symptoms" />
        </div>
        <div className='third'>
          <img src ="images/spread1.png" alt = "Covid Spread" />
        </div>
        <div className='fourth'>
          {/* <h3>Take the Following Steps to Self-Protect</h3> */}
          {/* <img src = "images/prevention.png" /> */}
          <img src = "/images/prevention1.png" alt = "Covid Prevention" />
        </div>
      </div>
    </div>
  )
}

export default Home