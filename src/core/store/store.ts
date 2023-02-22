import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "../../feature/characters/reducer/characters.reducer";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
  preloadedState: {},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
