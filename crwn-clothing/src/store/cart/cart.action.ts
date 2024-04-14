import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

import {
  createAction,
  withMatcher,
  Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

const modifyCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem,
  remove: boolean
): CartItem[] => {
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

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItemss = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CartItem,
  remove: boolean = false
) => {
  const newCartItems = modifyCartItem(cartItems, productToAdd, remove);
  return setCartItemss(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItemss(newCartItems);
};

export const setCartItems = withMatcher((cartInfo: CartItem) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartInfo)
);

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);
