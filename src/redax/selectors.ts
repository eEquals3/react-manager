import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

const commandsSelector = createSelector(
  (state: RootState) => state,
  (state) => state.commands.commands
);

const currentCommandsSelector = createSelector(
  (state: RootState) => state,
  (state) => state.commands.currentCommand
);

export const currentCommandSelector = createSelector(
  currentCommandsSelector,
  (currCommand) => {
    return currCommand;
  }
);

export const firstCommandSelector = createSelector(
  commandsSelector,
  (commands) => {
    return commands.length > 0 ? commands[0] : [];
  }
);
