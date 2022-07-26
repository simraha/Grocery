import React from 'react'
import Navbar from '../components/Navbar';
import CheckoutProduct from '../components/CheckoutProduct';
import Footer from '../components/Footer';

const CheckoutScreen = () => {
  return (
    <div>
        <Navbar />  
        <CheckoutProduct /> 
        <Footer /> 
    </div>
  )
}

export default CheckoutScreen