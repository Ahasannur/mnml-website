import React from 'react'
import './styles/CheckoutPage.css';

const CheckoutPage = ({userName}) => {
  return (
    <div>

      {/* Banner */}
      <div className="banner">
        <img src="images/mnml-logo.png" alt="logo image" className="logo" />
        <h1>MNML STYLES</h1>
      </div>

      {/* Confirmation Message */}
      <div className='message'>
        <h1>Thank you, {userName}.</h1>
        <img src="images/tick-icon.png" alt="tick icon" className="tick-img" />
        <h3>Your order was completed successfully</h3>
        <p>An email receipt including details about your order has been <br />
        sent to your account's email address. Please keep it for your records.</p>
      </div>
    </div>
  )
}

export default CheckoutPage