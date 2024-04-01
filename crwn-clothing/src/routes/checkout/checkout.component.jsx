import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/button/button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { selectIsPaymentPopupOpen } from "../../store/payment/payment.selector";
import { setIsPaymentPopupOpen } from "../../store/payment/payment.action";

import "./checkout.styles.scss";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const isPaymentPopupOpen = useSelector(selectIsPaymentPopupOpen);

  const openPaymentPopupHandler = (event) => {
    event.preventDefault();
    if (cartItems.length) {
      dispatch(setIsPaymentPopupOpen(true));
    }
  };

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
      <Button
        onClick={openPaymentPopupHandler}
        className="checkout-button"
        buttonType={cartItems.length ? "base" : "disabled"}
        title={Boolean(!cartItems.length) && "Add items to the cart"}
      >
        Checkout
      </Button>
      {isPaymentPopupOpen && Boolean(cartItems.length) && <PaymentForm />}
    </div>
  );
};

export default Checkout;
