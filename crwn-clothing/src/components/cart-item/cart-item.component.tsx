import { FC } from "react";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";

export type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>{`${quantity} x $${price}`}</Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
