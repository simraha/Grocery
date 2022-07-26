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
        <div class="container-fluid mt-5">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="table-responsive">
                <table id="myTable" class="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th class="text-right"><span id="amount" class="amount">Amount</span> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="product-img">
                          <div class="img-prdct"><img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60" /></div>
                        </div>
                      </td>
                      <td>
                        <p>Product One</p>
                      </td>
                      <td>
                        <div class="button-container">
                          <button class="cart-qty-plus" type="button" value="+">+</button>
                          <input type="text" name="qty" min="0" class="qty form-control" value="0" />
                          <button class="cart-qty-minus" type="button" value="-">-</button>
                        </div>
                      </td>
                      <td>
                        <input type="text" value="72" class="price form-control" disabled />
                      </td>
                      <td align="right">$ <span id="amount" class="amount">0</span></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="product-img">
                          <div class="img-prdct"><img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
              "/></div>
                        </div>
                      </td>
                      <td>
                        <p>Product Two</p>
                      </td>
                      <td>
                        <div class="button-container">
                          <button class="cart-qty-plus" type="button" value="+">+</button>
                          <input type="text" name="qty" min="0" class="qty form-control" value="0" />
                          <button class="cart-qty-minus" type="button" value="-">-</button>
                        </div>
                      </td>
                      <td>
                        <input type="text" value="125" class="price form-control" disabled />
                      </td>
                      <td align="right">$ <span id="amount" class="amount">0</span></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="product-img">
                          <div class="img-prdct"><img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
              "/></div>
                        </div>
                      </td>
                      <td>
                        <p>Product Three</p>
                      </td>
                      <td>
                        <div class="button-container">
                          <button class="cart-qty-plus" type="button" value="+">+</button>
                          <input type="text" name="qty" min="0" class="qty form-control" value="0" />
                          <button class="cart-qty-minus" type="button" value="-">-</button>
                        </div>
                      </td>
                      <td>
                        <input type="text" value="250" class="price form-control" disabled />
                      </td>
                      <td align="right">$ <span id="amount" class="amount">0</span></td>
                    </tr>
                    <tr>
                      <td>
                        <div class="product-img">
                          <div class="img-prdct"><img src="https://images.unsplash.com/photo-1502630039397-c104a63cc224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWdnc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=600&q=60
              "/></div>
                        </div>
                      </td>
                      <td>
                        <p>Product Four</p>
                      </td>
                      <td>
                        <div class="button-container">
                          <button class="cart-qty-plus" type="button" value="+">+</button>
                          <input type="text" name="qty" min="0" class="qty form-control" value="0" />
                          <button class="cart-qty-minus" type="button" value="-">-</button>
                        </div>
                      </td>
                      <td>
                        <input type="text" value="300" class="price form-control" disabled />
                      </td>
                      <td align="right">$ <span id="amount" class="amount">0</span></td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="4"></td><td align="right"><strong>TOTAL = $  <span id="total" class="total">0</span></strong></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>


  )
}

export default Checkout



//javascript below

// $(document).ready(function () {
//   update_amounts();
//   $('.qty, .price').on('keyup keypress blur change', function (e) {
//     update_amounts();
//   });
// });
// function update_amounts() {
//   var sum = 0.0;
//   $('#myTable > tbody  > tr').each(function () {
//     var qty = $(this).find('.qty').val();
//     var price = $(this).find('.price').val();
//     var amount = (qty * price)
//     sum += amount;
//     $(this).find('.amount').text('' + amount);
//   });
//   $('.total').text(sum);
// }



// //----------------for quantity-increment-or-decrement-------
// var incrementQty;
// var decrementQty;
// var plusBtn = $(".cart-qty-plus");
// var minusBtn = $(".cart-qty-minus");
// var incrementQty = plusBtn.click(function () {
//   var $n = $(this)
//     .parent(".button-container")
//     .find(".qty");
//   $n.val(Number($n.val()) + 1);
//   update_amounts();
// });

// var decrementQty = minusBtn.click(function () {
//   var $n = $(this)
//     .parent(".button-container")
//     .find(".qty");
//   var QtyVal = Number($n.val());
//   if (QtyVal > 0) {
//     $n.val(QtyVal - 1);
//   }
//   update_amounts();
// });
