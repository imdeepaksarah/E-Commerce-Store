import React, { useState } from "react";

const CartItem = () => {
  const [number, setNumer] = useState(0);

  const inc = () => {
    setNumer(number + 1)
  }

  const dic = () => {
    setNumer(
      number - 1
    )
  }

  

  return (
    <div className="cart-item">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt=""
      />
      <span>
        <h1>Product Name</h1>
        <h3>Rate : $100</h3>
        <h3>Qut : <button className="btn" onClick={dic}>-</button>{number}<button className="dicc" onClick={inc}>+</button></h3>
      </span>
      <button className="remove-btn">Remove</button>
    </div>
  );
};

export default CartItem;
