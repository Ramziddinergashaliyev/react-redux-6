import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../apiSlice/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(productApi.middleware),
});

setupListeners(store.dispatch);
