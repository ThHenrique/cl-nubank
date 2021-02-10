import * as types from "../types";

export function isLoadingComponent(loading) {
  return {
    type: types.SHIMMER_MAIN,
    loading,
  };
}
