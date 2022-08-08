import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CommandsState {
  currentCommand: string;
  commands: string[];
}

const initialState: CommandsState = {
  currentCommand: "",
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

export const {
  getAllUserCommands,
  addCommand,
  reduceCommand,
  setCurrentCommand,
} = commandsSlice.actions;

export default commandsSlice.reducer;
