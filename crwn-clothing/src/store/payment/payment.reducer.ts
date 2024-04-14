import { AnyAction } from "redux";
// import { PAYMENT_ACTION_TYPES } from "./payment.types";

import { setIsPaymentPopupOpen } from "./payment.action";

export type PaymentState = {
  readonly isPaymentPopupOpen: boolean;
};

export const PAYMENT_INITIAL_STATE: PaymentState = {
  isPaymentPopupOpen: false,
};

export const PaymentReducer = (
  state = PAYMENT_INITIAL_STATE,
  action = {} as AnyAction
) => {
  if (setIsPaymentPopupOpen.match(action)) {
    return { ...state, isPaymentPopupOpen: action.payload };
  }

  return state;

  // switch (type) {
  //   case PAYMENT_ACTION_TYPES.SET_IS_PAYMENT_POPUP_OPEN:
  //     return { ...state, isPaymentPopupOpen: payload };
  //   default:
  //     return state;
  // }
};
