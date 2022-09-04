import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/users";
import { quotesApi } from "./services/quotes";
import { photosApi } from "./services/photos";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [quotesApi.reducerPath]: quotesApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      [userApi, quotesApi, photosApi].map(({ middleware }) => middleware)
    ),
});
