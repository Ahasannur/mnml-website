import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles/ProductPage.css';

const ProductPage = ({setFinalBasket}) => {
    const product = {
        title: "Classic MNML t-shirt",
        price: 14.99,
        description: "Our best-selling Classic t-shirt Is the kind of forever favourite you'll want in every colour. Fashioned of light and airy cotton, this t-shirt is live-in-it soft and perfectly draped-one to tell your friends about.",
        sizes: ["S","M","L","XL"],
        image: [
          "images/tshirt-blue.jpg",
          "images/tshirt-green.jpg",
          "images/tshirt-grey.jpg",
          "images/tshirt-red.jpg",
          "images/tshirt-white.jpg"
        ]
      }

    const [selectedImg, setSelectedImg] = useState(product.image[0])
    const [colourIdx, setColourIdx] = useState(0)
    const [productValues, setProductValues] = useState({
        title: product.title,
        price: product.price,
        image: '',
        colour: '',
        size: 'S',
        quantity:'1',
        quantityPrice: product.price
    })
    const [basket, setBasket] = useState([])
    
    function indexToColour(idx) {
        if (idx === 0) {return 'Blue'}
        else if (idx === 1) {return 'Green'}
        else if (idx === 2) {return 'Grey'}
        else if (idx === 3) {return 'Red'}
        else if (idx === 4) {return 'White'}
    }
    
    function doTwo(img,index) {
        setSelectedImg(img)
        setColourIdx(index)
    }

    function handleSizeChange(e) {
        setProductValues({
            ...productValues,
            size: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    useEffect(() => {
        setProductValues({
            ...productValues,
            image: selectedImg,
            colour: indexToColour(colourIdx)
        })
    }, [selectedImg])

    function addToBasket(product) {
        setBasket([
            ...basket,
            {...product}
        ])
    }

  return (
    <div>
        {/* Banner */}
        <div className="banner">
            <img src="images/mnml-logo.png" alt="logo" className="logo" />
            <h1>MNML STYLES</h1>

            {/* Basket Icon */}
            <div>
                <Link to="/basket">
                    <img src='images/cart-icon.png' className='cart-icon' alt='basket icon' onClick={() => setFinalBasket(basket)}/>
                 </Link>
                 <div className='red-circle'
                 style={{ visibility: basket.length === 0 ? "hidden" : "visible"}}
                 >{basket.length}</div>
            </div>
        </div>
            {/* <pre>{JSON.stringify(productValues, null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(basket, null, 2)}</pre> */}
            <form className='product-form' onSubmit={handleSubmit}>
                {/* Main/Selected product image */}
                <img src={selectedImg} alt='main-img' className='product-main-img'/>

                {/* Product info on the right */}
                <div className="product-right-box">

                    {/* Product information */}
                    <div className='product-info'>
                        <h2 className='product-title'>{product.title}</h2>
                        <p className='product-description'>{product.description}</p>
                    </div>

                    {/* Dropdown option to chose the size */}
                    <div className='size-box'>
                        <label for='size'>Select a Size: </label> 
                        <select id='size' value={productValues.size} onChange={handleSizeChange}>
                        {product.sizes.map(size => (
                            <option value={size}>{size}</option>
                        ))}
                        </select>
                    </div>
                    
                    {/* Little product images */}
                    <div className='little-img-box'>
                    {product.image.map((img, index) => (
                    <img 
                    key={index}
                    src={img}
                    className='little-img'
                    alt='t-shirt colour'
                    onClick={() => doTwo(img, index)}
                    style={{ border: selectedImg === img ? "2px solid navy" : ""}} />
                    ))}
                    </div>

                    {/* Add to basket button and price */}
                    <span className='product-price'>£{product.price}</span>
                    <button className='basket-btn' type='submit' onClick={() => addToBasket(productValues)}>ADD TO BASKET</button>
                </div>
            </form>
    </div>
  )
}

export default ProductPage