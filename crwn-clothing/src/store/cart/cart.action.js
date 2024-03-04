import { CART_ACTION_TYPES } from "./cart.types";

import { createAction } from "../../utils/reducer/reducer.utils";

const modifyCartItem = (cartItems, productToAdd, remove) => {
  const matchedCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (matchedCartItem) {
    if (remove) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    }
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const addItemToCart = (cartItems, productToAdd, remove = false) => {
  const newCartItems = modifyCartItem(cartItems, productToAdd, remove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setCartItems = (cartInfo) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartInfo);

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);