import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Products.css';

function Products() {
  const [items, setItems] = useState(0)

  function addToCart() {
    var i = items + 1
    setItems(i)
  }

  return (
    <>
    <section id="popular-product">
    <div class="product-heading">
      <h3>Popular Product</h3>
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
        <img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
              " alt="produce"/>
        <strong>Eggs</strong>
        <span class="quantity">1 KG</span>
        <span class="price">$2</span>
        <a href="#" class="cart-btn">
          <i class="fa fa-shopping-bag"></i>Add To Cart
        </a>
        <a href="#" class="like-btn">
          <i class='bi bi-heart-fill'></i>
        </a>
      </div>

      <div class="product-box">
        <img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
              " alt="produce"/>
        <strong>Eggs</strong>
        <span class="quantity">1 KG</span>
        <span class="price">$2</span>
        <a href="#" class="cart-btn">
          <i class="fa fa-shopping-bag"></i>Add To Cart
        </a>
        <a href="#" class="like-btn">
          <i class='bi bi-heart-fill'></i>
        </a>
      </div>

      <div class="product-box">
        <img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
              " alt="produce"/>
        <strong>Eggs</strong>
        <span class="quantity">1 KG</span>
        <span class="price">$2</span>
        <a href="#" class="cart-btn">
          <i class="fa fa-shopping-bag"></i>Add To Cart
        </a>
        <a href="#" class="like-btn">
          <i class='bi bi-heart-fill'></i>
        </a>
      </div>

      <div class="product-box">
        <img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
              " alt="produce"/>
        <strong>Eggs</strong>
        <span class="quantity">1 KG</span>
        <span class="price">$2</span>
        <a href="#" class="cart-btn">
          <i class="fa fa-shopping-bag"></i>Add To Cart
        </a>
        <a href="#" class="like-btn">
          <i class='bi bi-heart-fill'></i>
        </a>
      </div>

      <div class="product-box">
        <img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
              " alt="produce"/>
        <strong>Eggs</strong>
        <span class="quantity">1 KG</span>
        <span class="price">$2</span>
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

export default Products