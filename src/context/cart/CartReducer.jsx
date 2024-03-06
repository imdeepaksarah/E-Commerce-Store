const CartReducer = (state, action) => {
  switch ((action, payload)) {

    
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };
    default:
      return state;
  }
};

export default CartReducer;
