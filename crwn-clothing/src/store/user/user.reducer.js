import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// In Redux all the reducer receives all the actions, its developer responsibility
// to act based on the action and return the existing state in default case.
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      // Gets executed when the action type is out of the scope of this reducer.
      // Additionally, as the state has not been updated, the components remains unchanged.
      return state;
  }
};
