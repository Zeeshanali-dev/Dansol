// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterSlice";

export const store = configureStore({
  reducer: {
    // * always use appropriate names of your redux slices. so new developer should not the purpose of this slice is
    counter: CounterReducer,
  },
});
