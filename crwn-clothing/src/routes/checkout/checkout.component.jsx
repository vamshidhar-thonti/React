import { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>description</span>
        </div>
        <div className="header-block">
          <span>quantity</span>
        </div>
        <div className="header-block">
          <span>price</span>
        </div>
        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
