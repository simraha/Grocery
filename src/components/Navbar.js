import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav class="navigation">
                {/* <!---logo------------> */}
                <a href="#" class="logo">
                    <Link to="/">
                        <span>e</span>Grocery
                    </Link>
                </a>

                {/* <!--menu-------------> */}
                <ul class="menu">
                    <Link to="/">
                        <li> 
                            <a href="#" class="active">Home</a>
                        </li>
                    </Link>
                    <Link to ="/category">
                        <li> 
                            <a href="#">Categories</a>
                        </li>
                    </Link>
                    <Link to ="/package">
                        <li> 
                            <a href="#">Our Packages</a>
                        </li>
                    </Link>
                    <Link to ="/about">
                        <li> 
                            <a href="#">About Us</a>
                        </li>
                    </Link>
                </ul>

                {/* <!--right-nav-(cart-like)--> */}
                <div class="right">
                    <a href="#" class="search">
                        <input type="text" placeholder="Search" />
                    </a>
                    {/* <!--like-----> */}
                    <a href="#" class="like">
                    <Link to="/favorite"> 
                    <i class="far fa-heart"></i>
                        <span>0</span>
                    </Link>
                    </a>
                    {/* <!--cart-----> */}
                    <a href="#" class="cart">
                    <Link to="/checkout">
                        <i class="fas fa-shopping-cart"></i>
                        <span>0</span>
                    </Link>
                    </a>
                    {/* <!-- login --> */}
                    <a href="#" class="login">
                    <Link to="/login">
                        <i class="fas fa-sign-in-alt"></i>
                        </Link>
                    </a>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar