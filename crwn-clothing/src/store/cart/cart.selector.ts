import { createSelector } from "reselect";

import { RootState } from "../store";

import { CartState } from "./cart.reducer";

import { CartItem } from "./cart.types";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems): number =>
    cartItems.reduce((accumulator: number, cartItem: CartItem) => {
      return accumulator + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulator: number, cartItem: CartItem) =>
      accumulator + cartItem.quantity * cartItem.price,
    0
  )
);
