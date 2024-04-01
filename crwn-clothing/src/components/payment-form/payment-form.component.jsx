import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { setIsPaymentPopupOpen } from "../../store/payment/payment.action";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  PaymentOverlayContainer,
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  ClosePopUp,
} from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const closePaymentPopupHandler = (event) => {
    event.preventDefault();
    dispatch(setIsPaymentPopupOpen(false));
  };

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100,
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret: clientSecret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);
    dispatch(setIsPaymentPopupOpen(false));

    if (paymentResult.error) {
      alert(paymentHandler.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <PaymentOverlayContainer>
      <PaymentFormContainer>
        <ClosePopUp onClick={closePaymentPopupHandler}>&#10005;</ClosePopUp>
        <FormContainer onSubmit={paymentHandler}>
          <h2>Credit Card Payment: </h2>
          <CardElement />
          <PaymentButton
            isLoading={isProcessingPayment}
            buttonType={BUTTON_TYPE_CLASSES.inverted}
          >
            Pay Now
          </PaymentButton>
        </FormContainer>
      </PaymentFormContainer>
    </PaymentOverlayContainer>
  );
};

export default PaymentForm;
