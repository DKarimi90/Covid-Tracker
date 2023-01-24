import React from 'react'



function Home() {
  return (
    <div className='Home'>
      <h1>Let's Control Corona Virus</h1>
      <div className ="container">
        <div className='first'>
        <img src = "/images/covid.jpg" />
        </div>
        <div className = 'second'>
          <img src = "/images/first.jpg" />
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
        <div className='third'></div>
        <div className='fourth'>
          {/* <h3>Take the Following Steps to Self-Protect</h3> */}
          {/* <img src = "images/prevention.png" /> */}
          <img src = "/images/prevention1.png"/>


        </div>
      </div>
    </div>
  )
}

export default Home