import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles/BasketPage.css';

const BasketPage = (finalBasket) => {

  let [basket, setBasket] = useState(finalBasket.finalBasket)

  function removeFromBasket(productToRemove) {
    setBasket(basket.filter(product => product !== productToRemove ))
  }

  function setQuantityPrice(product, amount) {
    let newBasket  = [...basket]
    let foundItem = newBasket.find(item => item === product)
    foundItem.quantity = amount
    foundItem.quantityPrice = product.price * amount
    setBasket(newBasket)
  }

  function totalSum(extra) {
    let sum = basket.reduce((sum, { quantityPrice }) => sum + quantityPrice, 0) + extra
    return parseFloat(sum).toFixed(2)
  }

  
  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <img src="images/mnml-logo.png" alt="logo image" className="logo" />
        <h1>MNML STYLES</h1>
      </div>

      {/* <pre>{JSON.stringify(basket, null, 2)}</pre> */}
      
      <div className='small-container cart-page'>
        <table>
          <tr>
            <th className='product-column'>Product</th>
            <th>Quantity</th>
            <th className='subtotal-column'>Subtotal</th>
          </tr>

          {/* Product Row */}
          {basket.map((product, index) => (
            <tr>
              <td className='product-column'>
                <div className='cart-info'>
                  <img src={product.image} />
                  <div className='cart-detail'>
                    <p>{product.title}</p>
                    <small>Price: £{product.price}</small>
                    <small>Colour: {product.colour}</small>
                    <small>Size: {product.size}</small>
                    <button onClick={() => {removeFromBasket(product)}}>Remove</button>
                  </div>
                </div>
              </td>

              {/* Quantity and subtotal */}
              <td><input type='number' min='1' max='9' value={product.quantity} onChange={e => setQuantityPrice(product, parseInt(e.target.value))} /></td>
              <td className='subtotal-column'>£{product.quantityPrice}</td>
            </tr>
          ))}
        </table>

        {/* Total price table */}
        <div className='total-price'>
          <table>
            <tr>
              <td>Subtotal</td>
              <td className='subtotal-column'>£{totalSum(0)}</td>
            </tr>
            <tr>
              <td>Standard Delivery</td>
              <td className='subtotal-column'>£2.90</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className='subtotal-column'>£{totalSum(2.9)}</td>
            </tr>
            
            {/* Checkout button */}
            <tr>
              <Link to="/checkout">
                <button className='btn subtotal-column'>CHECKOUT NOW</button>
              </Link>
            </tr>
          </table>
        </div>

      </div>
    </div>
  )
}

export default BasketPage