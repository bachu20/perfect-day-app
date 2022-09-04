import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/users";
import { quotesApi } from "./services/quotes";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [quotesApi.reducerPath]: quotesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware, quotesApi.middleware]),
});
