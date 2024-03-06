import React from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          <CartItem />
        </div>

        <div className="bill-section">
          <h1>
            Total Amount : <br />
            <br />
            $100
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
