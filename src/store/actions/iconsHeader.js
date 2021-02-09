import * as types from "../types";

export function onTapSettings(showSettings) {
  return {
    type: types.ONTAP_SETTINGS,
    showSettings,
  };
}
