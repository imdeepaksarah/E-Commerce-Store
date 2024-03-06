import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "../context/product/productContext";
import { fetchProducts } from "../context/product/ProductAction";
import CircularProgress from '@mui/material/CircularProgress';

const ProductContainer = () => {
  const { products, dispatch } = useContext(ProductContext);

  const getProducts = async () => {
    const data = await fetchProducts();
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!products || products.length === 0)
    return (
      <div className="Container">
        <h1 className="all-product-titel"><CircularProgress/></h1>
      </div>
    );

  return (
    <>
    <h1 className="all-products-title">All Products</h1>
    <div className="container">

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </>
  );
};

export default ProductContainer;
