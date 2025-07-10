import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import userReducer from "./features/user/uers.Slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
