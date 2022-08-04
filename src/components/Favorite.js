import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Favorite.css';

function Favorite() {
  const [items, setItems] = useState(0)

  function addToCart() {
    var i = items + 1
    setItems(i)
  }

  return (
    <>
    <section id="popular-product">
    <div class="product-heading">
      <h3>Favorite Products</h3>
      <span>All</span>
    </div>

    <div class="product-container">
      <div class="product-box">
        <img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
              " alt="produce"/>
        <strong>Eggs</strong>
        <span class="quantity">1 KG</span>
        <span class="price">$2</span>
        <a onClick={addToCart} href="#" class="cart-btn">
          <i class="fa fa-shopping-bag"></i>Add To Cart
        </a>
        
        <a href="#" class="like-btn">
          <i class='bi bi-heart-fill'></i>
        </a>
      </div>

      <div class="product-box">
        <img src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80
              " alt="produce"/>
        <strong>Bread</strong>
        <span class="quantity">1 Loaf</span>
        <span class="price">$5</span>
        <a href="#" class="cart-btn">
          <i class="fa fa-shopping-bag"></i>Add To Cart
        </a>
        <a href="#" class="like-btn">
          <i class='bi bi-heart-fill'></i>
        </a>
      </div>

      <div class="product-box">
        <img src="https://images.unsplash.com/photo-1576186726115-4d51596775d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60
              " alt="produce"/>
        <strong>Milk</strong>
        <span class="quantity">1 L</span>
        <span class="price">$4</span>
        <a href="#" class="cart-btn">
          <i class="fa fa-shopping-bag"></i>Add To Cart
        </a>
        <a href="#" class="like-btn">
          <i class='bi bi-heart-fill'></i>
        </a>
      </div>
    </div>
  </section>
    </>
  )
}

export default Favorite