import { PAYMENT_ACTION_TYPES } from "./payment.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsPaymentPopupOpen = (boolean) =>
  createAction(PAYMENT_ACTION_TYPES.SET_IS_PAYMENT_POPUP_OPEN, boolean);
