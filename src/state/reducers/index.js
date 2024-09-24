import { combineReducers } from "redux";
import cartReducer from "./cartReducer"; // Renamed from quantityReducer

const reducers = combineReducers({
  cart: cartReducer, // Updated key to match the new reducer name
});

export default reducers;
