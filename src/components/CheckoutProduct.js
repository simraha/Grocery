import React from 'react'
import "./CheckoutProduct.css"; 

function Checkout() {
  return (
<section id="popular-product">
    <div class="product-heading">
      <h3>Your Cart: </h3>
      <span>All</span>
    </div>

    <div class="product-container">
      <div class="product-box">
        <img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
              " alt="produce"/>
        <strong>Eggs</strong>
        <span class="quantity">1 KG</span>
        <span class="price">$2</span>
      </div>
      </div>
      </section>
  )
}

export default Checkout