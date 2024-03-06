import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const cartContext = createContext();

export const CartProvider = ({ children }) => {


  const initialState ={
    cartItems:[],
  }

  const [state ,dispatch] = useReducer(CartReducer , initialState);
  return <cartContext.Provider value={{...state}}>{children}</cartContext.Provider>;
};

export default cartContext;

