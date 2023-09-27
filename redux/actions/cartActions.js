import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "../actionTypes/cartActionsType";

export const addToCart = (product) => {

  console.log("---------------------------------------------------------")
  console.log("add to cart", product);
  console.log("---------------------------------------------------------")

    return {
      type: ADD_TO_CART,
      payload: product,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: REMOVE_FROM_CART,
      payload: {productId},
    };
  };
  

  export const incrementQuantity = (productId) => {
    return {
      type: INCREMENT_QUANTITY,
      payload: productId,
    };
  };
  
  export const decrementQuantity = (productId) => {
    return {
      type: DECREMENT_QUANTITY,
      payload: productId,
    };
  };
  