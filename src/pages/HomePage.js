import React from 'react'
import './styles/HomePage.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <img src="images/mnml-logo.png" alt="logo image" className="logo" />
        <h1>MNML STYLES</h1>
      </div>

      {/* Main body */}
      <div className='main-body'>
        {/* Left Box */}
        <div className='left-box'>
          <div className='text'>
            <h1>
              <span>SIMPLE</span> <br />
              AND <br />
              <span>MINIMAL</span>
            </h1>
          </div>
          <Link to="/signup">
            <button className='btn'>SHOP NOW</button>
            {/* <a href='src\pages\SignUpPage.js' className='btn'>SHOP NOW</a> */}
          </Link>
        </div>

        {/* Right Box */}
        <div className='right-box'>
          <img src="images/model-img.jpg" alt="image of model" className="model-img" />
        </div>
      </div>
    </div>
  )
}

export default HomePage