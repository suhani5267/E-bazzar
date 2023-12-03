import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/CreateSlice";
export const Store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  devTools: true,
});
