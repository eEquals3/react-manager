import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const currCommandsSelector = createSelector(
  (state: RootState) => state,
  (state) => state.commands.currentCommand
);

export const currentCommandSelector = createSelector(
  currCommandsSelector,
  (currCommand) => {
    return currCommand;
  }
);

const currTaskSelector = createSelector(
  (state: RootState) => state,
  (state) => state.tasks.tasks
);

export const currentTaskSelector = createSelector(
  currTaskSelector,
  (currentTask) => {
    return currentTask;
  }
);

const currWinTypeSelector = createSelector(
  (state: RootState) => state,
  (state) => state.utils.windowType
);

export const currentWinTypeSelector = createSelector(
  currWinTypeSelector,
  (currentType) => {
    return currentType;
  }
);
