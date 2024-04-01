import { PAYMENT_ACTION_TYPES } from "./payment.types";

export const PAYMENT_INITIAL_STATE = {
  isPaymentPopupOpen: false,
};

export const PaymentReducer = (state = PAYMENT_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PAYMENT_ACTION_TYPES.SET_IS_PAYMENT_POPUP_OPEN:
      return { ...state, isPaymentPopupOpen: payload };
    default:
      return state;
  }
};
