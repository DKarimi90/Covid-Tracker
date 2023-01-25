import React from 'react'

function Home() {
  return (
    <div className='Home'>
      <h1>Let's Control Corona Virus</h1>
      <div className ="container">
        <div className='first'>
        <img src = "/assets/fusion-medical-animation-rnr8D3FNUNY-unsplash.jpg" alt= "cough" />
        </div>
        <div className = 'second'>
          <img src = "/assets/2.jpg" alt="covid" />
          <div className='right'>
            <h3>Covid-19 Symptoms</h3>
            <p>Shortness of Breath</p>
            <p>Respiratory Symptoms</p>
            <p>Fever</p>
            <p>Dry Cough</p>
            <p>Tiredness</p><br />
            <h4>Others may Include:</h4>
            <p>Nasal Congestion</p>
            <p>Running Nose</p>
            <p>Muscles and Joint Pains</p>
          </div>
        </div>
        <div className='third'>
          <img src ="/assets/spread.png" alt= "spread" />
        </div>
        <div className='fourth'>
          {/* <h3>Take the Following Steps to Self-Protect</h3> */}
          {/* <img src = "images/prevention.png" /> */}
          <img src = "/assets/prevention1.png" alt="prevention"/>
        </div>
      </div>
    </div>
  )
}
export default Home