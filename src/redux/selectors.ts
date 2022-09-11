import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const currCommandSelector = createSelector(
  (state: RootState) => state,
  (state) => state.commands.currentCommand
);

export const CommandsSelector = createSelector(
  (state: RootState) => state,
  (state) => state.commands.commands
);

export const TaskSelector = createSelector(
  (state: RootState) => state,
  (state) => state.tasks.tasks
);

export const currWinTypeSelector = createSelector(
  (state: RootState) => state,
  (state) => state.utils.windowType
);

/* export const currentWinTypeSelector = createSelector(
  currWinTypeSelector,
  (currentType) => {
    return currentType;
  }
); */
