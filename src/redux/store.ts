import { configureStore } from "@reduxjs/toolkit";
import commandsReducer from "./commandSlice";
import taskReducer from "./taskSlice";
import utilityReducer from "./utilitySlice";

export const store = configureStore({
  reducer: {
    commands: commandsReducer,
    tasks: taskReducer,
    utils: utilityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
