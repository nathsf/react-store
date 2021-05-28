import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";

import controlReducer from "./controlReducer";

export default combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  control: controlReducer
});
