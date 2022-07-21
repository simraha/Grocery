import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav class="navigation">
                {/* <!---logo------------> */}
                <a href="#" class="logo">
                    <span>e</span>Grocery
                </a>

                {/* <!--menu-------------> */}
                <ul class="menu">
                    <li><a href="#" class="active">Home</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Our Packages</a></li>
                    <li><a href="#">Our App</a></li>
                </ul>

                {/* <!--right-nav-(cart-like)--> */}
                <div class="right">
                    <a href="#" class="search">
                        <input type="text" />
                    </a>
                    {/* <!--like-----> */}
                    <a href="#" class="like">
                        <i class="far fa-heart"></i>
                        <span>0</span>
                    </a>
                    {/* <!--cart-----> */}
                    <a href="#" class="cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span>0</span>
                    </a>
                    {/* <!-- login --> */}
                    <a href="#" class="cart">
                        <i class="fas fa-sign-in-alt"></i>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar