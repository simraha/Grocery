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
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Our Packages</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>

                {/* <!--right-nav-(cart-like)--> */}
                <div class="right">
                    <a href="#" class="search">
                        <input type="text" placeholder="Search" />
                    </a>
                    {/* <!--like-----> */}
                    <a href="#" class="like">
                        <i class="far fa-heart"></i>
                        <span>0</span>
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