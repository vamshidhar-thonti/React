export enum PAYMENT_ACTION_TYPES {
  SET_IS_PAYMENT_POPUP_OPEN = "payment/SET_IS_PAYMENT_POPUP_OPEN",
}

export type PaymentPopUp = {
  isPaymentPopupOpen: boolean;
};
