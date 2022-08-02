import React from 'react';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/Login";
import Navbar from './components/Navbar';
import Checkout from './components/CheckoutProduct';
import Footer from './components/Footer';
import CheckoutScreen from './screens/CheckoutScreen';
import AboutScreen from './screens/AboutScreen';
 
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<HomeScreen />}/>

        <Route path="/login" element={<><Navbar /><Login /></>}/> 

        <Route path="/checkout" element={<CheckoutScreen/>}/>
        {/* <Route path="/about" element={<AboutScreen/>}/> */}
        {/* <Switch>
        </Switch> */}
     
      </Routes>
      </BrowserRouter>


  );
}

export default App;