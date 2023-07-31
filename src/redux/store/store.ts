import { configureStore } from "@reduxjs/toolkit";
import { queryReducer } from "../slice/querySlice";
import { uiReducer } from "../slice/uiSlice";
import { cardsReducer } from "../slice/cardsSlice";

const store = configureStore({
  reducer: {
    query: queryReducer,
    ui: uiReducer,
    cards: cardsReducer
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch

export type { RootState, AppDispatch };
export { store };