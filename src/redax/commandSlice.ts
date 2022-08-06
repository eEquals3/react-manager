import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface CommandsState {
  currentCommand: string | null;
  commands: string[];
}

const initialState: CommandsState = {
  currentCommand: null,
  commands: ["команда1", "команда2", "команда3"],
};

interface Props {
  name: string;
  letterCount: number;
}

export const commandsSlice = createSlice({
  name: "Commands",
  initialState,
  reducers: {
    getAllUserCommands: (state, action: PayloadAction<string[]>) => {
      // state.commands = [...action.payload];
      return {
        ...state,
        commands: action.payload,
      };
    },
    addCommand: (state, action: PayloadAction<Props>) => {
      if (action.payload.letterCount > 3)
        state.commands.push(action.payload.name);
      console.log(state.commands);
      state.commands.sort();
    },
    reduceCommand: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        commands: state.commands.filter(
          (command) => command !== action.payload
        ),
      };
    },
    setCurrentCommand: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        currentCommand: action.payload,
      };
    },
  },
});

const selectSelf = (state: RootState) => state;
export const currentCommandSelect = createSelector(
  selectSelf,
  (state) => state.commands.currentCommand
);

export const {
  getAllUserCommands,
  addCommand,
  reduceCommand,
  setCurrentCommand,
} = commandsSlice.actions;

export default commandsSlice.reducer;
