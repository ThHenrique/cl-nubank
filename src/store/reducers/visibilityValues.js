import * as types from "../types";

const INITIAL_STATE = {
  visibility: true,
};

export default function visibilityValues(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.HANDLE_VISIBILITY:
      return { visibility: action.visibility };

    default:
      return state;
  }
}
