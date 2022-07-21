import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <>
            <footer>
                <div class="footer-container">
                    <div class="footer-logo">
                        <a href="#">Grocery Store</a>
                        <div class="footer-social">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>

                    <div class="footer-links">
                        <strong>Product</strong>
                        <ul>
                            <li><a href="#">Product A</a></li>
                            <li><a href="#">Product B</a></li>
                            <li><a href="#">Product C</a></li>
                            <li><a href="#">Product D</a></li>
                        </ul>
                    </div>

                    <div class="footer-links">
                        <strong>Product</strong>
                        <ul>
                            <li><a href="#">Product A</a></li>
                            <li><a href="#">Product B</a></li>
                            <li><a href="#">Product C</a></li>
                            <li><a href="#">Product D</a></li>
                        </ul>
                    </div>

                    <div class="footer-links">
                        <strong>Contact</strong>
                        <ul>
                            <li><a href="#">Phone Number</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer