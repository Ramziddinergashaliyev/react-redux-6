import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../apiSlice/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import wishlistSlice from "../apiSlice/wishlistSlice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    wishlist: wishlistSlice,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(productApi.middleware),
});

setupListeners(store.dispatch);
