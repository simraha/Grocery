import React from 'react'
import Navbar from '../components/Navbar';
import Favorite from '../components/Favorite';
import Footer from '../components/Footer';

const FavoritesScreen = () => {
  return (
    <div>
        <Navbar />  
        <Favorite />
        <Footer /> 
    </div>
  )
}

export default FavoritesScreen