import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  errorState: null,
};

// In Redux all the reducer receives all the actions, its developer responsibility
// to act based on the action and return the existing state in default case.
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      console.log({
        ...state,
        currentUser: payload,
      });
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      // Gets executed when the action type is out of the scope of this reducer.
      // Additionally, as the state has not been updated, the components remains unchanged.
      return state;
  }
};
