import React, { useContext } from "react";
import cartContext from "../context/cart/CartContext";


const ProductCard = ({ product }) => {


  const {dispatch} = useContext(cartContext)

  const handleAdd = (product) => {


    dispatch({
      
        type :"ADD_TO_CART",
        payload : product
        
      
    })
  }
  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
      <span>
        <h3>Price : {product.price}</h3>
        <button className="add_cart" onClick={() => handleAdd(product)}>Add to Cart</button>
      </span>
    </div>
  );
};

export default ProductCard;
