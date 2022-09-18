import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const getCurrentCommand = createSelector(
  (state: RootState) => state,
  (state) => state.commands.currentCommand
);

export const getCommands = createSelector(
  (state: RootState) => state,
  (state) => state.commands.commands
);

export const getTasks = createSelector(
  (state: RootState) => state,
  (state) => state.tasks.tasks
);

export const getCurrentTask = createSelector(
  (state: RootState) => state,
  (state) => state.tasks.currentTask
);

export const getWindowType = createSelector(
  (state: RootState) => state,
  (state) => state.utils.windowType
);

/* export const currentWinTypeSelector = createSelector(
  getWindowType,
  (currentType) => {
    return currentType;
  }
); */
