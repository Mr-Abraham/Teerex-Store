import { configureStore } from "@reduxjs/toolkit";
import { useStore } from "react-redux";
import storeSlice from "./useStore";

export const store = configureStore({
  reducer: storeSlice,
});
