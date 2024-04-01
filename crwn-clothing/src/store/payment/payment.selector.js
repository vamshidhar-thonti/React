import { createSelector } from "reselect";

const selectPaymentReducer = (state) => state.payment;

export const selectIsPaymentPopupOpen = createSelector(
  [selectPaymentReducer],
  (payment) => payment.isPaymentPopupOpen
)