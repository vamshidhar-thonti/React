import { PAYMENT_ACTION_TYPES, PaymentPopUp } from "./payment.types";
import {
  createAction,
  ActionWithPayload,
  withMatcher,
} from "../../utils/reducer/reducer.utils";

export type SetIsPaymentPopupOpen = ActionWithPayload<
  PAYMENT_ACTION_TYPES.SET_IS_PAYMENT_POPUP_OPEN,
  PaymentPopUp
>;

export const setIsPaymentPopupOpen = withMatcher((boolean: boolean) =>
  createAction(PAYMENT_ACTION_TYPES.SET_IS_PAYMENT_POPUP_OPEN, boolean)
);
