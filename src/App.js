import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import BasketPage from './pages/BasketPage';
import CheckoutPage from './pages/CheckoutPage';


function App() {
  
  const [finalUsers, setFinalUsers] = useState()
  const [finalBasket, setFinalBasket] = useState()
  const [userName, setUserName] = useState('Name')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage setFinalUsers={setFinalUsers} />} />
        <Route path="/login" element={<LoginPage finalUsers={finalUsers}  setUserName={setUserName} />} />
        <Route path="/product" element={<ProductPage setFinalBasket={setFinalBasket} />} />
        <Route path="/basket" element={<BasketPage finalBasket={finalBasket}/>} />
        <Route path="/checkout" element={<CheckoutPage userName={userName} />} />
      </Routes>
    </Router>
  );
}

export default App;
