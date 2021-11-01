import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
export const rootReducers = combineReducers({
    cart: cartReducer,
  });
  