import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import authSlices from "./slices/authSlices";
import homeSlices from "./slices/homeSlices";

const store = configureStore({
  reducer: {
    auth: authSlices,
    home: homeSlices
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispath = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispath>();

export default store;