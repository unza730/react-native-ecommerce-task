import { ADD_TO_CART, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from "../actionTypes/cartActionsType";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCartItem = action.payload;
      const existingCartItem = state.cartItems.find(
        (item) => item.id === newCartItem.id
      );

      if (existingCartItem) {
        // If the item is already in the cart, increment quantity
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === existingCartItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If it's a new item, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newCartItem, quantity: 1 }],
        };
      }

    case REMOVE_FROM_CART:
      const productId = action.payload.productId;
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== productId),
      };

    case INCREMENT_QUANTITY:
       return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };

    case DECREMENT_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
