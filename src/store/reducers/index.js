import { combineReducers } from "redux";

import iconsHeader from "./iconsHeader";
import visibilityValues from "./visibilityValues";
import shimmerMain from "./shimmerMain";

export default combineReducers({
  iconsHeader,
  shimmerMain,
  visibilityValues,
});
