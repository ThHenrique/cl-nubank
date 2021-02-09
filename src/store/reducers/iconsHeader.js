import * as types from "../types";

const INITIAL_STATE = {
  showSettings: false,
};

export default function onTapSettings(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ONTAP_SETTINGS:
      return { showSettings: action.showSettings };

    default:
      return state;
  }
}
