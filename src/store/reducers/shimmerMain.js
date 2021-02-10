import * as types from "../types";

const INITIAL_STATE = {
  loading: true,
};

export default function isLoadingComponent(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SHIMMER_MAIN:
      return { loading: action.loading };

    default:
      return state;
  }
}
