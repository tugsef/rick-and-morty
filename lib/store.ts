import  charactersReducer  from './features/characters/charactersSlice';
import { configureStore } from "@reduxjs/toolkit";



export const makeStore = () => {
  return configureStore({
    reducer: {
      characters: charactersReducer,
    
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];