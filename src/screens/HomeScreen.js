import React from 'react'
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <div>
        <Navbar /> 
        <Slider /> 
        <Products /> 
        <Footer /> 
    </div>
  )
}

export default HomeScreen