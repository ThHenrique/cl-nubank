import * as types from "../types";

export function handleVisibilityValues(visibility) {
  return {
    type: types.HANDLE_VISIBILITY,
    visibility,
  };
}
