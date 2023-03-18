import { IS_SIGNED } from "../actions";

const INITIAL_STATE = {
  isSigned: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_SIGNED:
      return { ...state, isSigned: action.payload };
    default:
      return state;
  }
};
