import { createSelector } from "reselect";
import { RootState } from "../store";

const selectPaymentReducer = (state: RootState) => state.payment;

export const selectIsPaymentPopupOpen = createSelector(
  [selectPaymentReducer],
  (payment) => payment.isPaymentPopupOpen
);
