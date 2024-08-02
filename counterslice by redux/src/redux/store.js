import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../redux/slices/counterslice"

export const store = configureStore({
  reducer : {
    Counter : CounterSlice
  },
})